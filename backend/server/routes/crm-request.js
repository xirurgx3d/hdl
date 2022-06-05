import request from 'request'
import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()
const API_KEY = '243_repfjrqAkdXjFjRSRDHRCxNpVtWrxDc6NYxcMJaGhcvnQaMY';

// for domoplaner
router.post('/send', async  function(req, res) {
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
				!err ? res.status(200).json({error:true}) : res.status(500).json({error:true})
    });
		
		try {

			
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
				to: "sale@arcadacrimea.ru",
				subject: "жксолнечныйпарк.рф",
				text: req.body.comment,
				html: ` имя - ${req.body.name}, телефон - ${req.body.phone}, сообщение - ${req.body.comment} `
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

