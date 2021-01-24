var express = require('express');
var router = express.Router();
const contactModel = require('../models/contact.js');

router.get('/', function (req, res, next) {
  return res.status(200).json({ ok: 'contact' })
});

router.post('/contact', function (req, res, next) {
  try {
    const { firstName, lastName, email, phone, msg } = req.body;
    const saved = new contactModel({
      firstName, lastName, email, phone, msg
    });

    saved.save(function (err, doc) {
      if (!err) {
        return res.status(201).json({ status: true, doc: doc });

      } else {
        return res.status(500).json({ status: false, error: err });

      }
    });
  } catch (error) {
    return res.status(500).json({ status: false, error: error });

  }
});

module.exports = router;
