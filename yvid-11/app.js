const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "tufahel",
        email: "tufahel@gmail.com",
        username: "tufahel"
    })

    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateuser = await userModel.findOneAndUpdate({username: "tufa"}, {name: "omor"}, {new: true});

    res.send(updateuser)
})

app.get('/read', async(req,res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get('/delete', async(req,res) => {
    let users = await userModel.findOneAndDelete({username: "harsh"});
    res.send(users);
})

app.listen(3000);