const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const multer = require('multer');

//enable CORS
const cors = require('cors');
app.use(cors());

//Http Request Logger
const morgan = require('morgan');
app.use(morgan('combined'));

//Connect to DB
const db = require('./config/db');
db.connect();

//Parsing data received from client
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/images')));

//Ipmport model
const Image = require('./models/Blog')


var storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`)
            // console.log(file.originalname)
    }
});
let maxSize = 100 * 1024 * 1024; //10MB
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single("file")
app.get("/", (req, res) => {
    res.send("Et o et ...");
});

//Api - Get all products
app.get("/images", async(req, res) => {
    try {
        let images = await Image.find();
        res.json(images);
    } catch (err) {
        res.json("message" + err.message)
    }
})

//API upload file

app.post("/upload", (req, res) => {
    upload(req, res, async(err) => {
        if (err) {
            res.json({ message: err.message })
        } else {
            //Insert data into db
            let imagesInfo = new Image({
                name: req.body.name,
                thumbPath: req.file.filename
            })
            await imagesInfo.save();
            res.json({ message: "Success!" });
            // console.log("File received:", req.file.filename)
        }

    });
})



//Import Example Router
const exampleRouter = require('./routers/blog.router');

app.use('/', exampleRouter);

// Import Profile Router
const tutorRouter = require('./routers/tutor.router');

app.use('/', tutorRouter);

// Import Router
const learnerRouter= require('./routes/forlearner.router');

app.use('/',learnerRouter);


app.listen(port, () => {
    console.log(`My server listening on port ${port}`);
})