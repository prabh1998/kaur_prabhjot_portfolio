var express = require('express');
var router = express.Router();
var path = require('path');

const sql = require('../utils/sql');

/* GET home page. */

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home Page' });
  // res.sendFile((path.join(__dirname, "../views/index.html")));
});

// get portfolio page

router.get('/portfolio', function (req, res, next) {

  let query = `SELECT * FROM tbl_database`;

  sql.query(query, (err, result) => {
    if (err) { console.log(err); } // something done broke!

    console.log(result); // this should be the database row

    res.render('portfolio', { title: 'Portfolio' , data: result});
  })
  
  // res.sendFile((path.join(__dirname, "../views/portfolio.html")));
});
module.exports = router;
