const User = require('../model/User.model')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


dotenv.config();


exports.UserRegister = async (req, res) => {
    try {
        const { fullName, username, email, password, bio } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword,
            bio,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(503).json(err);
    }
}
exports.UserLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("User not found!");

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        const token = jwt.sign({
            email: req.body.email,
            password: req.body.password,
            admin: user.isAdmin,
            id: user._id + "sss",
            exp: Math.floor(Date.now()/1000) + 3600

        }, process.env.JWTKEY)

        if (!validPassword) {
            res.status(403).send("Invalid password!");
        } else {
            res.status(200).json(token);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}