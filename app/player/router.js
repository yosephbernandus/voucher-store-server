var express = require('express');
var router = express.Router();
const { landingPage, detailPage, category } = require('./controller');

router.get('/landing-page', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);

module.exports = router;
