var express = require('express');
var router = express.Router();
const { dashboard, landingPage, detailPage, category, checkout, history, historyDetail, profile } = require('./controller');
const { isLoginPlayer } = require('../middleware/auth');

router.get('/landing-page', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.post('/checkout', isLoginPlayer, checkout);
router.get('/history', isLoginPlayer, history);
router.get('/history/:id/detail', isLoginPlayer, historyDetail);
router.get('/dashboard', isLoginPlayer, dashboard);
router.get('/profile', isLoginPlayer, profile);

module.exports = router;
