const { UserLogin, UserRegister } = require('../controllers/User.controller')
const express = require('express');
const router = express.Router();


 router.post("/login", UserLogin)
 router.post("/registr", UserRegister)

module.exports = router  