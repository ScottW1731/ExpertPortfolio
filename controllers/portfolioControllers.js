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

//api 
// router.post('/send', function(req, res) {
//   console.log('receiving data ...');
//   console.log('body is ',req.body);
//   res.send(req.body);
//   //This is going to be useful for your post contact information
// });

// app.post('/sample/put/data', function(req, res) {

// });
// Export routes for server.js to use.
module.exports = router;
