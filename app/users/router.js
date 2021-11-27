var express = require('express');
var router = express.Router();
const { viewSignIn } = require('./controller');


/* GET home page. */
router.get('/', viewSignIn);


module.exports = router;
