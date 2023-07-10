const Information = require("../model/Information.model")

exports.UploadFile = async (req, res) => {
    // res.send(req.files)
    try {
        console.log(req.files);
        console.log(req.files[0].path);
        const newInformation = new Information({
            path:req.files[0].path, 
            originalname:req.files[0].originalname, 
            text:req.body.text, 
            author:req.body.author,
        })
        const information = await newInformation.save()
        res.status(200).json(information)
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

exports.openFile = async (req, res) =>{
    Information.find().then(data => res.status(200).json(data)).catch(err => res.status(400).json(err))
}