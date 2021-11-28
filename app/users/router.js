var express = require('express');
var router = express.Router();
const { viewSignIn, actionSignin, actionLogout } = require('./controller');


/* GET home page. */
router.get('/', viewSignIn);
router.post('/', actionSignin);
router.get('/logout', actionLogout);


module.exports = router;
