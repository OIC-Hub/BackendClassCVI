const cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || "dpld5dpgu",
    api_secret: process.env.CLOUDINARY_SECRETKEY || "foy0oI9k5VBzHkFlogPt9DKwTEw",
    api_key: process.env.CLOUDINARY_APIKEY || "454785522514635"
});

const upload = async(req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "backendclass"
        });
        res.status(200).send({message: "Image uploaded", ImageUrl: result.secure_url})
    } catch (error) {
        console.error(error)
    }
}

module.exports = { upload };
