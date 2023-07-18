const { UserLogin, UserRegister } = require('../controllers/User.controller')
const express = require('express');
const router = express.Router();
const jwttoken = require('../jwtkey/jwt');
var multer = require('multer');
const { UploadFile, openFile, deleteFile } = require('../controllers/Information.controller');
const { outputFile, removeFile } = require('../controllers/Image.controller');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
})

router.post("/login", UserLogin)
router.post("/registr", UserRegister)
router.post('/add_info', jwttoken, upload.any(), UploadFile)
router.get('/show_data', jwttoken, openFile)
router.get('/file/:filename', outputFile)
router.delete('/deletefile/:id', jwttoken, deleteFile)

module.exports = router  