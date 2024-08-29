import bcryptjs from 'bcryptjs';
import {User} from '../models/User.model';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';
import { generateVerificationCode } from '../utils/generateVerificationCode';

export const signup = async (req, res) => {

  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error('All fields are required');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationCode = generateVerificationCode();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken: verificationCode,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, 
    });
    await user.save();

    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: 'User signed up successfully',
      user: {
        ...user._doc,
        password: undefined, // remove password from response (security)
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.send('Login');
};
export const logout = async (req, res) => {
  res.send('Logout');
};  