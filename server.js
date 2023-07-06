const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const useRooter = require('./root/rooter')

const port = 1992;

dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE);
        console.log("Connect to server");
    } catch (error) {
        console.log(error);
    }
}
app.use(express.json());
app.use('/', useRooter)

app.listen(port, ()=>{
    connect();
    console.log("Server works in " + port);
})