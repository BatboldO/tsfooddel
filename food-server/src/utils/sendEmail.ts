import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smto.gmail.com",
  port: 587,
  secure: true,
  auth: {
  
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



export const sendEmail = async () => {
const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email, 
    subject, 
    text: "Hello world?", 
    html: "",
  });
};


const generateTemplate = (name:string) => {
    return `
    <div>
    <h1>Hello ${name}</div>
    <p> please verify 123</p>
    <a href="http://www.google.com"> Account</a>
    </div>
    
    `
}
