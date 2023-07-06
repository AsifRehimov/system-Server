const jwt = require("jsonwebtoken")

module.exports = (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWTKEY)
        console.log(jwt.decode(token, process.env.JWTKEY))
        next()
    } catch (error) {
        console.log(error);
    }
}