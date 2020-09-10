var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wildenwildenaliali@gmail.com',
    password: 'yourpassword'
  }
})

var mailOptions = {
  from: 'wildenwildenaliali@gmail.com',
  to: 'wilden.ali11@gmail.com',
  subject: 'Test kirim email pakai NodeJS',
  text: 'That was amazing'
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email terkirim: ' + info.response);
  }
})