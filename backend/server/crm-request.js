const request = require('request');
const express = require("express");
const API_KEY = '243_repfjrqAkdXjFjRSRDHRCxNpVtWrxDc6NYxcMJaGhcvnQaMY';

var app = express();

// for domoplaner
app.post('/send-form/',  function(req, res) {
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
        let response = {err, data, resp}
        return res.json(333);
    });
});


