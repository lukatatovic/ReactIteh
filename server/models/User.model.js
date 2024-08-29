import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
   {
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      lastLogin: {
        type: Date,
        default: Date.now,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      resetPasswordToken: String,
      resetPasswordExpiresAt: Date,
      verificationToken: String,
      verificationTokenExpiresAt: Date,
      profilePicture: {
        type: String,
        default:
          'https://firebasestorage.googleapis.com/v0/b/splitwise-iteh.appspot.com/o/profileplaceholder.png?alt=media&token=90eaaa00-e04f-44b3-bd63-36edebb69572',
      },
    },
    { timestamps: true }
);
  
export const User = mongoose.model('User', UserSchema);