const express = require('express');
const router = express.Router();

//Import model
const Learner = require('../models/learner')

//Router config
//Rendering HomePage
router.get('/', (reg, res) => {
    res.send("My Learner Profile")
});

//Get all products
router.get('/learners', (reg, res) => {
    // res.send("Product list")
    Learner.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error": err.messages }) })
})


module.exports = router;