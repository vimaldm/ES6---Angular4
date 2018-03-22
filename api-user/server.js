var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var user = require('./lib/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 4200; //Custom port
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/users');

router.use(function (req, res, next) {
    console.log('Logging request....!');
    next();
});


router.route('/users').post(function (req, res) {
    var p = new user();
    p.name = req.body.name;
    p.lastname = req.body.lastname;
    p.dob = req.body.dob;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("User Created");
        res.send({ message: 'User Created !' })
    })
});

app.use(cors());
app.use('/api/v1', router);
app.listen(port);
console.log('API runnning port: ' + port);