const jwt = require('jsonwebtoken');

const AuthGateKeeper = async (req, res, next) => {
      const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = decode;
        next();

    } catch (error) {
        console.error("Error decoding token:", error);
    }
    
}

module.exports = AuthGateKeeper;