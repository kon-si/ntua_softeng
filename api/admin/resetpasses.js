const express = require('express')
const router = express.Router();


router.get('/', (req,res) => {
	res.end('RESETPASSES WORKS!');
});
module.exports = router;