const express = require('express');
const router = require('../routers/blog.router');

//Import model
const Learner = require('../models/learner');


//Router config
//Rendering HomePage
router.get('/', (reg, res) => {
    res.send("Tìm gia sư")
});

//Get all products
router.get('/learners', (reg, res) => {
    // res.send("Product list")
    Learner.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error": err.messages }) })
})

router.get("/search/:key", async(req, res) => {
    console.log(req.params.key)
    let data = await Learner.find({
        "$or": [
            { "Direct": { $regex: req.params.key } },
            { "Gender": { $regex: req.params.key } },
            { "Subject": { $regex: req.params.key } },
            { "class": { $regex: req.params.key } },
            { "Level": { $regex: req.params.key } }

        ]
    })
    res.send(data)

})



// Get product by id
// router.get('/:id', async(req, res) => {
//     // console.log(req.params.id);

//     try {
//         let data = await Learner.findById(req.params.productId);
//         res.join(data);
//     } catch (err) {
//         res.json({ "Error": err.message });
//     }
// })


// Update product
// router.patch("/:id", async(req,res) =>{
//     try{
// await Profile.updateOne({_id: req.params.id},
//     {$set:{name: req.body.name,price: req.body.price}
//     })
//     res.json({ message:"success"})
// } 
//     catch(err){
//         res.json({"Error": err.message});}

// })

module.exports = router;