'use strict';
var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var connetionString = "mongodb://demodatabase20220820:XFIDJQ860htsnk3uidusB2tvUZVvsIacQUHB2Zn9udLtFl47xGDKslO4dkdYERUwVr7nWUmE2YPjbjpoD6JwYQ==@demodatabase20220820.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@demodatabase20220820@";

router.post('/login', function (req, res) {
    mongoClient.connect(connetionString,
        function(err, db) {
            if (err) throw err;
            var dbo = db.db("demo");
            var query = {username: req.body.username, password: req.body.password };
            dbo.collection("users").find(query).toArray(function(err, resq) {
                if (err) throw err;
                res.json(resq).status(200);
                console.log(res);
                db.close();
            });
        });
});

router.post('/register', function (req, res) {
    mongoClient.connect(connetionString,
        function(err, db) {
            if (err) throw err;
            var dbo = db.db("demo");
            var query = { username: req.body.username, password: req.body.password };
            dbo.collection("users").insertOne(query,
                function(err, resq) {
                    if (err) throw err;
                    res.json(resq).status(200);
                    console.log(res);
                    db.close();
                });
        });
});

module.exports = router;
