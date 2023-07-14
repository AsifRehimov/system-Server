const Information = require("../model/Information.model")
const fs = require('fs');
const path = require('path');

exports.UploadFile = async (req, res) => {
    try {
        console.log(req.files);
        console.log(req.files[0]);
        const newInformation = new Information({
            path: req.files[0].path,
            originalname: req.files[0].originalname,
            text: req.body.text,
            author: req.body.author,
            type: req.files[0].mimetype
        })
        const information = await newInformation.save()
        res.status(200).json(information)
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

exports.openFile = async (req, res) => {
    Information.find().then(data => res.status(200).json(data)).catch(err => res.status(400).json(err))
}


exports.deleteFile = async (req, res) => {
    try {
        const files = await Information.find({ _id: req.params.id })
        await Information.deleteOne({ _id: req.params.id });
        const filename = files.originalname;
        const filePath = path.join(__dirname, '../public/uploads', filename);

        fs.unlink(filePath, (err, data) => {
            res.send(data);
        });

        res.status(200).json({
            success: true
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }



}
