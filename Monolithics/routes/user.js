const express = require('express');
const router = express.Router();
const { getUserData, addData, home, deleteData} = require('../controller/ejscontroller');

router.get('/users', getUserData);
router.post('/add', addData);
router.get("/", home)
router.get('/delete/:id', deleteData);

module.exports = router;