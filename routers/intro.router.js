const express=require ('express');
const router= require('../routers/blog.router');

//Import model
const Intro= require('../models/Intro')

//Router config
//Rendering Homepage
router.get('/', (req, res) => { res.send("Intropage....") });

//Get all products
router.get('/intro', (req, res) => {
// res.send("Product List")
    Intro.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error:": err.messages }) })
})


    // let intro = new Intro({
    //     name: req.body.name,
    //     price: req.body.price
    // })
   
module.exports = router;
