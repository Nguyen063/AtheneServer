const express = require('express');
const router = require('../routers/blog.router');
// const router = express.Router();

//Import model
const Feedback = require('../models/feedback');

//Router config
//Rendering Homepage
router.get('/', (req, res) => { res.send("Feedback....") });

//Get Intropage
router.get('/feedback', async(req, res) => {
    Feedback.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error:": err.messages }) })
})



module.exports = router;