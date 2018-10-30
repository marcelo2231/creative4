var express = require('express');
var router = express.Router();
var request = require('request');
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('creative.html', { root:  'public' });
});

router.get('/api',function(req,res) {
    console.log("In api route");
    console.log(req.query);
    var url = "https://love-calculator.p.mashape.com/getPercentage?fname=" + req.query.q + "&sname=" + req.query.sname;
    console.log(url);

    request({
    headers: {
      'X-Mashape-Key': "Tg9JnVn4oTmsh3JXwAJjIW0Ctg6Wp1QOx0kjsnINrtyIR5htIi"
    },
    uri: url,
    method: 'POST'
  }).pipe(res);

  // These code snippets use an open-source library. http://unirest.io/nodejs
//  unirest.get(url)
//  .header("X-Mashape-Key", "Tg9JnVn4oTmsh3JXwAJjIW0Ctg6Wp1QOx0kjsnINrtyIR5htIi")
//  .header("Accept", "application/json")
//  .end(function (result) {
//   //console.log(result.status, result.headers, result.body);
//  });
  });

module.exports = router;
