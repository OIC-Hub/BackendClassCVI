const Product = require("../models/Product");

 const createProduct = async (req, res) => {
    const {name, price, description, image} = req.body;
    if(!name || !price || !description || !image){
        res.status(400).send({message: "Invalid Request"})
    }

    const newProduct = new Product ({
        name: name,
        price: price,
        description: description,
        image: image,
    })

    await newProduct.save();
    res.status(200).send("added successfully")
}

module.exports = createProduct;