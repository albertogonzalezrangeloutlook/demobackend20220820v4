'use strict';
var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var connetionString = "mongodb://demodatabase20220820:XFIDJQ860htsnk3uidusB2tvUZVvsIacQUHB2Zn9udLtFl47xGDKslO4dkdYERUwVr7nWUmE2YPjbjpoD6JwYQ==@demodatabase20220820.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@demodatabase20220820@";

router.post('/', function (req, res) {
    mongoClient.connect(connetionString,
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("demo");
            var query = { CLIENTNUM: Number(req.body.CLIENTNUM) };
            dbo.collection("BankChurners").find(query).toArray(function (err, resq) {
                if (err) throw err;
                res.json(resq).status(200);
                console.log(res);
                db.close();
            });
        });
});

module.exports = router;