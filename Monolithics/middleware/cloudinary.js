const cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")
dotenv.config();

cloudinary.config({
 cloud_name:"dpld5dpgu",
  api_secret:"IUlHJU6yh5J263ZlQ7a_xaa_82s",
  api_key: "469949227858597",
});

const upload = async(req, res, next) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "backendclass"
        });
        req.imageUrl = result.secure_url; 
        // res.send(req.imageUrl)
        next();
    } catch (error) {
        console.error(error)
    }
}

module.exports = { upload };
