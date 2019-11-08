var express = require('express');
var request = require('request')
var router = express.Router();

/* GET home page. */
router.get('/cities', function(req, res, next) {
  console.log("In Cities");
  console.log(req.query);
  console.log(req.query.q);
  var fs = require('fs');
  fs.readFile(__dirname + '/names.dat.txt', function(err, data) {
    if (err) throw err;
    var cities = data.toString().split("\n");
    var myRe = new RegExp("^" + req.query.q);
    //console.log(myRe);
    for (var i = 0; i < cities.length; i++) {
      //console.log(cities[i]);
      var result = cities[i].search(myRe);
      if (result != -1) {
        //console.log(cities[i]);
      }
    }
    var jsonresult = [];
    for (var i = 0; i < cities.length; i++) {
      var result = cities[i].search(myRe);
      if (result != -1) {
        //console.log(cities[i]);
        jsonresult.push({ city: cities[i] });
      }
    }
    res.status(200).json(jsonresult);
    //console.log(jsonresult);
  });
});

router.get('/owl', function(req, res, next) {
  console.log("In Owl");
  console.log(req.query);
  console.log(req.query.q);
  var owlurl = "https://owlbot.info/api/v1/dictionary/" + req.query.q + "?format=json";
  console.log(owlurl);
  request(owlurl).pipe(res);
});

module.exports = router;
