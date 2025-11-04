const Auth = require("../models/Auth");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        const { name, email, phoneNo, password, role } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new Auth({
            name: name,
            email: email,
            password: hashPassword,
            phoneNo: phoneNo,
            role: role || 'user'
        })

        newUser.save();
        res.status(200).send({ message: "Register successfully" });
    } catch (error) {
        console.error(error)
        res.status(500).send("internal server error", error)

    }
}


const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).send("Oga put data")
    }

    const data = await Auth.findOne({ email });
    if (!data) {
        res.status(400).send("Incorrect details")
    }

    const validatePassword = await bcrypt.compare(password, data.password);
    if (!validatePassword) {
        res.status(400).send("Incorrect Password")
    }
    const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
        expiresIn: "1hr"
    })

    res.status(200).send({ message: "login successfully", token })

}


const get = async (req, res) => {
    const auth = await Auth.find();
    res.status(200).send({ message: "user successfully", auth })
}

const getProfile = async (req, res) => {
    // const { id } = req.params.id
    const user = req.user.id;
    console.log(req.user);

    const Data = await Auth.findById(user).select("-password")
    console.log(Data);

    res.status(200).send({ message: "fetched profile successfully", Data })
}

const onlyAdmin = (req, res) => {
    res.status(200).send({ message: "Welcome Admin" })
}

module.exports = { register, login, get, getProfile, onlyAdmin }