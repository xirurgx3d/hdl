import request from 'request'
import express from 'express'


const router = express.Router()
const API_KEY = '243_repfjrqAkdXjFjRSRDHRCxNpVtWrxDc6NYxcMJaGhcvnQaMY';

// for domoplaner
router.post('/send', async  function(req, res) {
	/**/
		console.log(req.body);
    request.post({
        url: 'https://domoplaner.ru/dc-api/api/leads/',
        qs: {
            apikey: API_KEY
        },
        form: {
            name: req.body.name,
            phone: req.body.phone,
            project_id: 99, // 99 для ЖК «Солнечный парк»,
            comment: req.body.comment
        }
    }, function(err, data, resp) {
				!err ? res.status(200).json('ok') : res.status(500).json('no')
    });
		
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
});
export default router

