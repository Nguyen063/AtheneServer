const express = require('express');
const router = express.Router();

// Import model
const FormLearner = require('../models/formlearner')



//Router config
//rendering HomePage
router.get('/', (req, res) => {
    res.send("Ok.....")
});

//Get form
router.get('/form', (req, res) => {
    // res.send("Product List")
    FormLearner.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error": err.messages }) })
})

// Insert 
router.post("/form", (req, res) => {
    upload(req, res, async(err) => {
        if (err) {
            res.json({ message: err.message })
            return;
        } else {
            let blog = new FormLearner({
                id: req.body.id,
                firstname: req.body.firstname,
                lastname: req.body. lastname,
                phone: req.body. phone,
                password: req.body.password,
                confirmpw: req.body.confirmpw,
                addressnumber: req.body.addressnumber,
                ward: req.body.ward,
                district: req.body.district,
                city: req.body.city,
                identification: req.file.identification,
                dateprovided: req.file.dateprovided,

            })

            await blog.save();
            res.json({
                message: "Success"
            })

        }
    })
})



//Update product
router.patch("/:id", async(req, res) => {
    try {
        await FormLearner.updateOne({ _id: req.params.id }, {
                $set: { price: req.body.price }
            })
          
        res.json({
            message: "Success"
        })
        return;
    } catch (err) {
        res.json({
            "Error": err.message
        })
        return;
    }
})


module.exports = router;