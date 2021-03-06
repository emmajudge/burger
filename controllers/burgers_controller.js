var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/insertOne", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
            console.log(result);
            res.redirect("/");
        });
});

router.put("/burgers/updateOne", function (req, res) {
   burger.updateOne(req.body.burger_id, function (result) {
            console.log(result);
            res.redirect("/");
    });
});

router.put("/burgers/orderAgain", function (req, res) {
    burger.updateOne(req.body.burger_id, function (result) {
             console.log(result);
             res.redirect("/");
     });
 });

// Export routes for server.js to use.
module.exports = router;