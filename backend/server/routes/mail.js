import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

router.post('/send',async (req,res)=>{
	try {

		
		let transporter = nodemailer.createTransport({
			host: 'smtp.beget.com',
	    port: 465,
			secure: true,
	    auth: {
	        user: 'solar@arcadacrimea.ru',
	        pass: '*Dbln4rk'
	    }
		});
		/*
		let testEmailAccount = await nodemailer.createTestAccount()

		let transporter = nodemailer.createTransport({
		  host: 'smtp.ethereal.email',
		  port: 587,
		  secure: false,
		  auth: {
		    user: testEmailAccount.user,
		    pass: testEmailAccount.pass,
		  },
		})*/
	
		let info = await transporter.sendMail({
			from: 'solar@arcadacrimea.ru', // sender address
			to: "bambinix3dx@yandex.ru", // list of receivers
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>", // html body
			
		});

		console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	} catch (error) {
		console.log(error);
	}
	res.status(200).send('ok')
}) 
    
export default router