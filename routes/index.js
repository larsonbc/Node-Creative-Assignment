var express = require('express');
var request = require('request')
var router = express.Router();

/* GET home page. */
router.get('/players', function(req, res, next) {
  console.log("In players");
  console.log(req.query);
  console.log(req.query.q);
  var fs = require('fs');
  fs.readFile(__dirname + '/names.dat.txt', function(err, data) {
    if (err) throw err;
    var players = data.toString().split("\n");
    var myRe = new RegExp("^" + req.query.q);
    //console.log(myRe);
    for (var i = 0; i < players.length; i++) {
      //console.log(players[i]);
      var result = players[i].search(myRe);
      if (result != -1) {
        //console.log(players[i]);
      }
    }
    var jsonresult = [];
    for (var i = 0; i < players.length; i++) {
      var result = players[i].search(myRe);
      if (result != -1) {
        //console.log(players[i]);
        jsonresult.push({ city: players[i] });
      }
    }
    res.status(200).json(jsonresult);
    //console.log(jsonresult);
  });
});

router.get('/mascots', function(req, res, next) {
  console.log("In Mascots");
  console.log(req.query);
  console.log(req.query.q);
  var fs = require('fs');
  fs.readFile(__dirname + '/mascots.dat.txt', function(err, data) {
    if (err) throw err;
    var mascots = data.toString().split("\n");
    var myRe = new RegExp("^" + req.query.q);
    //console.log(myRe);
    for (var i = 0; i < mascots.length; i++) {
      //console.log(mascots[i]);
      var result = mascots[i].search(myRe);
      if (result != -1) {
        //console.log(mascots[i]);
      }
    }
    var jsonresult = [];
    for (var i = 0; i < mascots.length; i++) {
      var result = mascots[i].search(myRe);
      if (result != -1) {
        //console.log(mascots[i]);
        jsonresult.push({ city: mascots[i] });
      }
    }
    res.status(200).json(jsonresult);
    //console.log(jsonresult);
  });
});

router.get('/coaches', function(req, res, next) {
  console.log("In Coaches");
  console.log(req.query);
  console.log(req.query.q);
  var fs = require('fs');
  fs.readFile(__dirname + '/coaches.dat.txt', function(err, data) {
    if (err) throw err;
    var coaches = data.toString().split("\n");
    var myRe = new RegExp("^" + req.query.q);
    //console.log(myRe);
    for (var i = 0; i < coaches.length; i++) {
      //console.log(coaches[i]);
      var result = coaches[i].search(myRe);
      if (result != -1) {
        //console.log(coaches[i]);
      }
    }
    var jsonresult = [];
    for (var i = 0; i < coaches.length; i++) {
      var result = coaches[i].search(myRe);
      if (result != -1) {
        //console.log(coaches[i]);
        jsonresult.push({ city: coaches[i] });
      }
    }
    res.status(200).json(jsonresult);
    //console.log(jsonresult);
  });
});

/*router.get('/owl', function(req, res, next) {
  console.log("In Owl");
  console.log(req.query);
  console.log(req.query.q);
  var owlurl = "https://owlbot.info/api/v1/dictionary/" + req.query.q + "?format=json";
  console.log(owlurl);
  request(owlurl).pipe(res);
});*/

module.exports = router;
