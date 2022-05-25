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
router.get('/update-blog', (req, res) => {
    // res.send("Product List")
    Blog.find({})
        .then(data => { res.json(data) })
        .catch(err => { err.json({ "Error": err.messages }) })
})

// get blog by id
router.get('/:blogId', async(req, res) => {
        try {
            let data = await Blog.findById(req.params.blogId);
            res.json(data)
        } catch (err) {
            res.json({
                "Error": err.message
            })
        }

    })
    // Insert new a product
router.post("/update-blog", async(req, res) => {
    console.log("Data from client: ", req.body);
    res.send("Server received data!")
    let blog = new Blog({
        name: req.body.name,
        author: req.body.author,
        content: req.body.content,
        // title1: req.body.title1,
        // content1: req.body.content1,
        // title2: req.body.title2,
        // content2: req.body.content2,
        // title3: req.body.title3,
        // content3: req.body.content3,
        // thumbPath: req.body.thumbPath,
        // thumbPath1: req.body.thumbPath1,
        // thumbPath2: req.body.thumbPath2,
        // createdAt: req.body.createdAt,
        // updatedAt: req.body.updatedAt,

    })
    try {
        await blog.save();
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
router.patch("/:id", async(req, res) => {
    try {
        await Blog.updateOne({ _id: req.params.id }, {
                $set: { price: req.body.price }
            })
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

//Delete product
router.delete("/:id", async(req, res) => {
    try {
        await Blog.remove({ _id: req.params.id });
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