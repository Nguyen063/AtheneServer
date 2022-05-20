const express = require('express');
const router = require('../routers/blog.router');

//Import model
const Intro = require('../models/intro');

//Router config
//Rendering Homepage
router.get('/', (req, res) => { res.send("Intropage....") });

//Get Intropage
router.get('/intro', async(req, res) => {
    Intro.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error:": err.messages }) })
})

module.exports = router;