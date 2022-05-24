import request from 'request'
import express from 'express'


const router = express.Router()
const API_KEY = '243_repfjrqAkdXjFjRSRDHRCxNpVtWrxDc6NYxcMJaGhcvnQaMY';

// for domoplaner
router.post('/send',  function(req, res) {
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
		
		
});
export default router

