const express=require ('express');
const router= express.Router();

//Import model
const Intro= require('../models/Intro')

//Router config
router.get('/', (req, res) => {
    res.send("Ok.....")
});

//Get all products
router.get('/intro', (req, res) => {
// res.send("Product List")
    Intro.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error": err.messages }) })
})

// Insert new a product
router.post("/intro", async(req, res) => {
    console.log("Data from client: ", req.body);
    res.send("Server received data!")
    // let intro = new Intro({
    //     name: req.body.name,
    //     price: req.body.price
    // })
    try {
        let p = await intro.save();
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
