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
    // app.get("/", (req, res) => {
    //     res.send("Et o et ...");
    // });

//Api - Get all products
// app.get("/blog", async(req, res) => {
//     try {
//         let images = await Image.find();
//         res.json(images);
//     } catch (err) {
//         res.json("message" + err.message)
//     }
// })


// API upload file

// app.post("/update-blog", (req, res) => {
//     upload(req, res, async(err) => {
//         if (err) {
//             res.json({ message: err.message })
//             return;
//         } else {
//             //Insert data into db
//             let imagesInfo = new Image({
//                 id: req.body.id,
//                 name: req.body.name,
//                 author: req.body.author,
//                 content: req.body.content,
//                 title1: req.body.title1,
//                 content1: req.body.content1,
//                 title2: req.body.title2,
//                 content2: req.body.content2,
//                 title3: req.body.title3,
//                 content3: req.body.content3,
//                 // thumbPath: req.file.filename,
//                 // thumbPath1: req.file.filename,
//                 // thumbPath2: req.file.filename
//             })
//             await imagesInfo.save();
//             res.json({ message: "Success!" });
//             // console.log("File received:", req.file.filename)
//         }

//     });
// })



//Import Blog Router
const blogRouter = require('./routers/blog.router');

app.use('/', blogRouter);

// Import Profile Tutor Router
const profileRouter = require('./routers/profile.router');

app.use('/', profileRouter);

// Import Learner Router

const LearnerRouter = require('./routers/learner.router');
app.use('/', LearnerRouter);


// Import Tutor Router
const tutorRouter = require('./routers/tutor.router');
app.use('/', tutorRouter);

// Import Intro Router
const IntroRouter = require('./routers/intro.router');

app.use('/', IntroRouter);

// Import data Router
const datasRouter = require('./routers/dataAthene.router');

app.use('/', datasRouter);

//Import feedback router
const feedback = require('./routers/feedback.router');
app.use('/', feedback);

app.use(express.json());



app.listen(port, () => {
    console.log(`My server listening on port ${port}`);
})