const { UserLogin, UserRegister } = require('../controllers/User.controller')
const express = require('express');
const router = express.Router();
const jwttoken = require('../jwtkey/jwt');
var multer = require('multer');
const { UploadFile, openFile } = require('../controllers/Information.controller');
const { outputFile } = require('../controllers/Image.controller');



const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});

const upload=multer({
    
   //  fileFilter: (req, file, cb) => {
   //      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
   //          cb(null, true);
   //      } else {
   //          cb(null, false);
   //          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
   //      }
   //  },
    storage:storage,
}) 


 router.post("/login", UserLogin)
 router.post("/registr", UserRegister)
 router.post("/posts", jwttoken, (req, res) =>{
    res.json({
      data:{
         id : req.user.id
      }
    })
   })
router.post('/add_info', upload.any(), UploadFile)
router.get('/show_data', openFile)
router.get('/file/:filename', outputFile)
 

module.exports = router  