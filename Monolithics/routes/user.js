const express = require('express');
const router = express.Router();
const { getUserData, addData, home, deleteData, imageform} = require('../controller/ejscontroller');
const uploadMiddleware = require("../middleware/cloudinary")
const multer = require("multer")

const upload = multer({ dest: 'uploads/' });


router.get('/users', getUserData);
// router.post('/add', addData);
router.get("/", home)
router.get("/form", imageform)
router.get('/delete/:id', deleteData);

router.post('/upload',
    upload.single('image'),      
    uploadMiddleware.upload,     
    addData                      
);


module.exports = router;