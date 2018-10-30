var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('creative.html', { root:  'public' });
});

router.get('/api',function(req,res) {
    console.log("In api route");
    var url = "https://owlbot.info/api/v1/dictionary/" + req.query.q;
    console.log(url);

    request(url).pipe(res);
});

module.exports = router;
