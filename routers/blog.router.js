const express = require('express');
const router = express.Router();

const multer = require('multer');

// Import model
const Blog = require('../models/Blog')

var storage = multer.diskStorage({
    destination: "images",
    filename: (req, thumbPath, cb) => {
        cb(null, `${Date.now()}--${thumbPath.originalname}`)
            // console.log(file.originalname)
    }
});
let maxSize = 100 * 1024 * 1024; //10MB
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single("thumbPath")

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
    return;
})

// get blog by id
// router.get('/:blogId', async(req, res) => {
//         try {
//             let data = await Blog.findById(req.params.blogId);
//             res.json(data)
//         } catch (err) {
//             res.json({
//                 "Error": err.message
//             })
//         }

//     })
// Insert new a product
router.post("/update-blog", (req, res) => {
    upload(req, res, async(err) => {
        if (err) {
            res.json({ message: err.message })
            return;
        } else {
            let blog = new Blog({
                id: req.body.id,
                name: req.body.name,
                author: req.body.author,
                content: req.body.content,
                title1: req.body.title1,
                content1: req.body.content1,
                title2: req.body.title2,
                content2: req.body.content2,
                title3: req.body.title3,
                content3: req.body.content3,
                thumbPath: req.file.filename,
                thumbPath1: req.file.thumbPath1,
                thumbPath2: req.file.thumbPath2

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
        await Blog.updateOne({ _id: req.params.id }, {
                $set: { price: req.body.price }
            })
            // res.json({ status: 200, message: "Success!" })
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

//Delete product
router.delete("/update-blog/:id", async(req, res) => {
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