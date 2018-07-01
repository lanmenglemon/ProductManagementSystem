var express = require('express'),
    app = express(),
    cors = require('cors')
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    ObjectId = require('mongoose').Types.ObjectId,
    jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.Promise = require('q').Promise;

mongoose.connect('mongodb://localhost/ProductManagementSystem');
var db = mongoose.connection;

    
db.on('error', function() {
    console.log('Error happened!');
});
    
db.on('open', function() {
    console.log('Mongoose Connected!');
});

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.post('/signup', function(req, res) {
    db.collection('users').insert(req.body, function (err) {
        if(!err) {
            res.send({
                flg: true
            });
        }
    });
});



app.post('/login', function(req, res) {
    var token = jwt.sign({'uname':req.body.username}, 'secret-key', {
        expiresIn: '2h'
    });
    if (req.body.username && req.body.password) {
        db.collection('users').find(req.body).toArray(function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                if(docs.length != 0) {
                    res.send({
                        isLoggedIn: true,
                        token: token
                    });
                } else {
                    res.send({
                        isLoggedIn: false
                    });
                }
            }
        })
    } else {
        res.send({
            isLoggedIn: false
        });
    }

});

app.use(function(req, res, next) {
    var token = req.body.authtoken || req.query.authtoken || req.headers['authtoken'];
    jwt.verify(token, 'secret-key', function(err, decoded) {
        if (err) {
            console.log(err);
            res.send({
                err: true,
                msg: 'Invalid request'
            })
        } else {
            req.decoded = decoded;
            next();
        }
    });

})

app.get('/getproducts', function(req, res) {
    db.collection('products').find().toArray(function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            res.send(docs);
        }
    });
})

app.post('/getproductdetail', function(req, res) {
    db.collection('products').find(req.body).toArray(function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            res.send(docs);
        }
    });
})

app.post('/addproduct', function (req, res) {
    db.collection('products').insert(req.body, function (err) {
        if(!err) {
            res.send({
                flg: true
            });
        }
    });
})

app.listen(3000, function() {
    console.log('Server running on 3000!');
})