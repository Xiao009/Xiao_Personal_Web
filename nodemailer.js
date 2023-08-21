import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

//sending myself email to know what's the content instead of let other people send from theirs
export const mailOptions = {
  from: email,
  to: email,
};
