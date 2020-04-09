var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req,res){
  res.render('about');
})

router.get('/experience', function(req, res) {
  res.render('experience');
})
router.get('/categories', function(req, res) {
  res.render('categories');
})

router.get('/categories/life', function(req, res) {
  res.render('categories/life');
})

router.get('/categories/LeetCodes', function(req, res) {
  res.render('categories/LeetCodes');
})

router.get('/LeetCodes/:id', function(req, res) {
  var id = req.params.id
  console.log(id);
  res.render('Leetcodes/'+id);
})
module.exports = router;
