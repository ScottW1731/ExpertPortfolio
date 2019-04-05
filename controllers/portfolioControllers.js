var express = require('express');

// routes for pages
var router = express.Router();

//Routes
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.post('/api/cats', function(req, res) {
  //This is going to be useful for your post contact information
});

// Export routes for server.js to use.
module.exports = router;
