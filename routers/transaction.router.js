const express = require('express');
const router = require('../routers/blog.router');
// const router = express.Router();

//Import model
const Transaction = require('../models/transaction');

//Router config
//Rendering Homepage
router.get('/', (req, res) => { res.send("Transactions....") });

//Get Intropage
router.get('/transaction', async(req, res) => {
    Transaction.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error:": err.messages }) })
})

module.exports = router;