import dotenv from 'dotenv';
import { MailGenerator,transporter } from './mailer';

dotenv.config();

export const sendVerificationMail = async (name, email, verificationCode) => {
  let mail = {
    body: {
      name,
      intro: `Welcome to Splitwise! Your account verification code is: ${verificationCode}`,
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let emailBody = MailGenerator.generate(mail);
  let message = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'Welcome to Splitwise',
    html: emailBody,
  };

  try {
    await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong while sending an email verification');
  }
};