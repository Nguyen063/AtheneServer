const express = require('express');
const router = express.Router();

// Import model
const Blog = require('../models/Blog')

//Router config
//rendering HomaPage
router.get('/', (req, res) => {
    res.send("Ok.....")
});

//Get all products
router.get('/blog', (req, res) => {
    // res.send("Product List")
    Blog.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error": err.messages }) })
})


//get product by id
// router.get('/:productId', async(req, res) => {
//         try {
//             let data = await Product.findById(req.params.productId);
//             res.json(data)
//         } catch (err) {
//             res.json({
//                 "Error": err.message
//             })
//         }

//     })
// Insert new a product
router.post("/blog", async(req, res) => {
    console.log("Data from client: ", req.body);
    res.send("Server received data!")
    let blog = new Blog({
        name: req.body.name,
        price: req.body.price
    })
    try {
        let p = await blog.save();
        res.json({
            message: "Success"
        })

    } catch (err) {
        res.json({
            "Error": err.message
        })
    }
})


//Update product
// router.patch("/:id", async(req, res) => {
//     try {
//         await Product.updateOne({ _id: req.params.id }, {
//                 $set: { price: req.body.price }
//             })
//             // res.json({ status: 200, message: "Success!" })
//         res.json({
//             message: "Success"
//         })
//     } catch (err) {
//         res.json({
//             "Error": err.message
//         })
//     }
// })

//Delete product
// router.delete("/:id", async(req, res) => {
//     try {
//         await Product.remove({ _id: req.params.id });
//         // res.json({ status: 200, message: "Success!" })
//         res.json({
//             message: "Success"
//         })
//     } catch (err) {
//         res.json({
//             "Error": err.message
//         })
//     }
// })

module.exports = router;