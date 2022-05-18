const express= require('express');
const router= express.Router();

//Import model
const Learner= require('../models/LearnerProfile')

//Router config
//Rendering HomePage
router.get('/',(reg,res)=>{
    res.send("My Learner Profile")
});

//Get all learner profiles
router.get('/learner',(reg,res)=>{
    // res.send("Product list")
    Learner.find({})
    .then(data => {res.json(data)})
    .catch(err => {err.json({"Error": err.messages})})
})


module.exports=router;