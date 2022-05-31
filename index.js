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


//Import class router
const classManage = require('./routers/class.router');
app.use('/', classManage);

//Import transaction router
const Transaction = require('./routers/transaction.router');
app.use('/', Transaction);


app.use(express.json());

const User = require('./models/user');
const jwt = require('jsonwebtoken');

// CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});


// check whether the request has a valid JWT access token
let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if (err) {
            // there was an error
            // jwt is invalid - * DO NOT AUTHENTICATE *
            res.status(401).send(err);
        } else {
            // jwt is valid
            req.user_id = decoded._id;
            next();
        }
    });
}

// Verify Refresh Token Middleware (which will be verifying the session)
let verifySession = (req, res, next) => {

    let refreshToken = req.header('x-refresh-token');

    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            return Promise.reject({
                "error": "User not found."
            });
        }

        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
                    isSessionValid = true;
                }
            }
        });
        if (isSessionValid) {
            next();
        } else {
            return Promise.reject({
                "error": "Refresh token has expired or the session is invalid"
            })
        }
    }).catch((e) => {
        res.status(401).send(e);
    })
}

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Quá là xì chét" });
});


//User routers
app.post('/users', (req, res) => {
    let body = req.body;
    let newUser = new User(body);

    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        return newUser.generateAccessAuthToken().then((accessToken) => {
            return { accessToken, refreshToken }
        });
    }).then((authTokens) => {
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser)
    }).catch((e) => {
        res.status(400).send(e);
    })
})


app.post('/users/login', (req, res) => {
    let phone = req.body.phone;
    let password = req.body.password;

    User.findByCredentials(phone, password).then((user) => {
        return user.createSession().then((refreshToken) => {
            return user.generateAccessAuthToken().then((accessToken) => {
                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user)
        }).catch((e) => {
            res.status(400).send(e);
        })
    })
})


app.get('/users/me/access-token', verifySession, (req, res) => {
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})

app.listen(port, () => {
    console.log(`My server listening on port ${port}`);
})