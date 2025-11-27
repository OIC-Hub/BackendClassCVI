const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'example_folder',
    });
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading image' });
  }
};

module.exports = { uploadImage };

const express = require('express');
const router = express.Router();
const multer = require('multer');
const ImageController = require('./ImageController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), ImageController.uploadImage);

module.exports = router;