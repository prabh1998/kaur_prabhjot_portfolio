const express = require('express');
const router = express.Router();
const path = require('path');

const sql = require('../utils/sql');



// /* GET portfolio page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home Page' });
  // res.sendFile((path.join(__dirname, "../views/index.html")));
});

// // get portfolio page

router.get('/portfolio', function (req, res, next) {

  let query = `SELECT * FROM tbl_database WHERE id="${req.params.target}"`;

  sql.query(query, (err, result) => {
    if (err) { console.log(err); } 

    console.log(result); // this should be the database row

    res.render('portfolio', { title: 'Portfolio' , project: result});
  })
  
  // res.sendFile((path.join(__dirname, "../views/portfolio.html")));

  

});
module.exports = router;




