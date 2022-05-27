const express = require('express');
const router = require('../routers/blog.router');
// const router = express.Router();

//Import model
const Class = require('../models/class');

//Router config
//Rendering Homepage
router.get('/', (req, res) => { res.send("ClassDetail....") });

//Get Intropage
router.get('/classManage', async(req, res) => {
    Class.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error:": err.messages }) })
})
router.delete("/class-manager/:id", async(req, res) => {
    try {
        await Class.remove({ _id: req.params.id });
        // res.json({ status: 200, message: "Success!" })
        res.json({
            message: "Success"
        })
    } catch (err) {
        res.json({
            "Error": err.message
        })
    }
})
module.exports = router;