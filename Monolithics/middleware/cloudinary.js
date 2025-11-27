const cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || "",
    api_secret: process.env.CLOUDINARY_SECRETKEY || "",
    api_key: process.env.CLOUDINARY_APIKEY || ""
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
