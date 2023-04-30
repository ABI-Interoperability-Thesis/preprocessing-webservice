const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api-controller')

router.post('/preprocess/:model', apiController.PreprocessRequest)
module.exports = router;