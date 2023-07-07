const { UserLogin, UserRegister } = require('../controllers/User.controller')
const express = require('express');
const router = express.Router();
const jwttoken = require('../jwtkey/jwt');


 router.post("/login", UserLogin)
 router.post("/registr", UserRegister)
 router.post("/posts", jwttoken, (req, res) =>{
    res.json({
      data:{
         id : req.user.id
      }
    })
   })
 

module.exports = router  