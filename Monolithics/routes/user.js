const express = require('express');
const router = express.Router();
const { getUserData, addData} = require('../controller/ejscontroller');

router.get('/users', getUserData);
router.post('/add', addData);

module.exports = router;