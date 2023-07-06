const { UserLogin, UserRegister } = require('../controllers/User.controller')
const express = require('express');
const router = express.Router();
const checkjwt = require('../jwtkey/jwt')


 router.post("/login", UserLogin)
 router.post("/registr", UserRegister)
 router.post("/posts", checkjwt, (req, res) =>{
    res.json()
 })

module.exports = router  