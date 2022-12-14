const express = require('../../backend/node_modules/express');
// const pgsync = require('../../backend/node_modules/pg-sync');
const router = express.Router();
const fs = require('fs');
const pool = require('../../backend/connect');

var sql = fs.readFileSync('../cli/data/data.sql').toString();

router.post('/', function(req, res) {
	pool.connect(function(err, client, release) {
		if(err) {
			res.status(500).json({status:"failed"});
			console.log("connection failed", err);
        }
		client.query(sql, function(err) {
			if (err) {
				res.status(500).json({status:"failed"});
				console.log("data not inserted", err);
			}
			else {
				res.status(200).json({status:"OK"});
				console.log("data inserted");
			}
		});
		release();	
	});
});

module.exports = router;
