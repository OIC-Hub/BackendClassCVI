const Auth = require("../models/Auth");
const bcrypt = require("bcrypt")

const register = async (req, res) => {
        try {
            const {name, email, phoneNo, password} = req.body;

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const newUser = new Auth({
                name:name,
                email: email,
                password: hashPassword,
                phoneNo: phoneNo
            })

            newUser.save();
            res.status(200).send({message: "Register successfully"});
        } catch (error) {
            console.error(error)
            res.status(500).send("internal server error", error)
        
        }
}


const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(400).send("Oga put data")
    }

    const data = await Auth.findOne({email});
    if(!data){
        res.status(400).send("Incorrect details")
    }

    const validatePassword = await bcrypt.compare(password, data.password);
    if(!validatePassword){
        res.status(400).send("Incorrect Password")
    }

    res.status(200).send("login successfully")

}


const get = async(req, res) => {
    const auth = await Auth.find();
    res.status(200).send( {message: "user successfully", auth})
}

module.exports ={register, login, get}