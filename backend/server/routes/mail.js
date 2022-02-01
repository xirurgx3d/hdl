import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

router.post('/send',async (req,res)=>{
	let transporter = nodemailer.createTransport({
    host: "solar@жксолнечныйпарк.рф",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: solar, // generated ethereal user
      pass: Rokkox3d, // generated ethereal password
    },
  });

	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "g-unit@x3d.ukr.net", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
		
	});
	res.status(200).send('ok')
}) 
    
export default router