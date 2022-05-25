import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

router.post('/send',async (req,res)=>{
	try {

		/*
		let transporter = nodemailer.createTransport({
			host: 'smtp.beget.com',
			port: 25,
			secure: false,
	    auth: {
	        user: 'test@жксолнечныйпарк.рф',
	        pass: 'BdA*0SOh' //7mEcdON& //test 7EC*3Ufs
	    }
		});

		auth: {
        user: "test@khinkalich.ru",
        pass: "rjqg4G&t"
    	}
		
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

		let transporter = nodemailer.createTransport({
			host: "smtp.beget.com",
			port: 25,
			secure: false,
			auth: {
        user: "test@xn--80ajcndddqbgqne2gxc.xn--p1ai",
        pass: "6m&8DQ5V"
    	}
	});
	
		let info = await transporter.sendMail({
			from: "test@xn--80ajcndddqbgqne2gxc.xn--p1ai",
			to: "bambinix3dx@yandex.ru",
			subject: "Подписка на рассылку с хинкалыч.рф",
			text: "Подписка",
			html: `mail `
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