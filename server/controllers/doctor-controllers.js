// const Doctor = require('../db/models/doctor-schema');
const Docter = require('../db/models/doctor-schema');

const genPassword = require('generate-password');
const nodemailer = require('nodemailer');

module.exports.signupDoctor = async (req, res) => {
  const body = req.body;
  const doctor = await Docter.findOne({ email: body.email });
  if (doctor) {
    return res.status(403).json({ message: 'email already existed ' });
  }
  const docPassword = genPassword.generate({
    length: 10,
    numbers: true,
  });
  const imageLink = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
  console.log(imageLink);
  console.log(docPassword);

  const reponse = await Docter.create({
    ...body,
    image: imageLink,
    password: docPassword,
  });
  const token = '';
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'learningmern74@gmail.com',
      pass: 'pltk kxic cckb dail',
    },
  });
  let mailOptions = {
    from: 'learningmern74@gmail.com',
    to: body.email,
    subject: 'Login creds for Docter booking app',
    text: `your email id :${body.email},and  password: ${docPassword}`,
  };

  transporter.sendMail(mailOptions, error => {
    if (error) {
      return res.status(404).json({ message: 'error' });
    }
    return res.status(200).json({ message: 'Mail send' });
  });

  res.status(201).json({ message: 'sign-up' });
};