const express= require('express');
const router= express.Router();

//Import model
const Profile= require('../models/profile')

//Router config
//Rendering HomePage
router.get('/',(reg,res)=>{
    res.send("My Profile")
});

//Get all products
router.get('/profiles',(reg,res)=>{
    // res.send("Product list")
    Profile.find({})
    .then(data => {res.json(data)})
    .catch(err => {err.json({"Error": err.messages})})
})

// Get product by id
router.get('/:id', async(req,res)=>{
   // console.log(req.params.id);
    
    try{
let data=  await Profile.findById(req.params.productId);
res.join(data);
    } catch(err){
        res.json({"Error": err.message});
    }
})


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

module.exports=router;