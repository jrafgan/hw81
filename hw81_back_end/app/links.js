const express = require('express');
const nanoid = require('nanoid');
const Link = require('../models/Link');

const router = express.Router();

router.get('/', (req, res) => {
    Link.find().then(links => res.send(links)).catch(() => res.sendStatus(500));
});

router.get('/:shortUrl', (req, res) => {
    console.log('req.params.shortUrl = ', req.params.shortUrl);
    Link.findOne({shortUrl: req.params.shortUrl}).then(link => {
        if (link) res.status(301).redirect(link.originalUrl);
        else res.sendStatus(404);
    }).catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {

    let link = req.body;

    const links = new Link(link);
    links.save().then(result => {
        console.log(result);
        res.send(result);
    }).catch(error => {
        res.status(400).send(error);
        console.log(error);
    });
});

module.exports = router;