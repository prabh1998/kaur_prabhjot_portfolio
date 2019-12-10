// var express = require('express');
// var router = express.Router();
// var path = require('path');

// const sql = require('../utils/sql');



// /* GET portfolio page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Home Page' });
//   // res.sendFile((path.join(__dirname, "../views/index.html")));
// });

// // get portfolio page

// router.get('/portfolio', function (req, res, next) {

//   let query = `SELECT * FROM tbl_database`;

//   sql.query(query, (err, result) => {
//     if (err) { console.log(err); } 

//     console.log(result); // this should be the database row

//     res.render('portfolio', { title: 'Portfolio' , project: result});
//   })
  
//   // res.sendFile((path.join(__dirname, "../views/portfolio.html")));
// });
// module.exports = router;

// do all the usual imports here

const connect = require('../utils/sql');

router.get('/', (req, res) => {

    // get the connection via the connection pool, and then run the query -> just one added step
    connect.getConnection((err, connection) => {
		if (err) { return console.log(error.message); }

		let query = `... your query goes here. obviously this won't work, so don't copy and paste this line ...`;

		connect.query(query, (err, rows) => {
			connection.release(); // send this connection back to the pool

			if (err) {
				// will exit the function and log the error
				return console.log(err.message);
			}

			console.log(rows); // this should be your database query result

			// render our page
			res.render('portfolio', {data: rows}); // whatever page and data you're rendering
		});
	});
})

module.exports = router;
