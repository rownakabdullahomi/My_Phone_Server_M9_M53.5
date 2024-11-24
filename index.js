const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Coming soon soon soon");
})

app.get("/phones", (req, res) => {
    res.send(phones);
})

app.get("/phones/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    console.log("id is : ", id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})

app.listen(port, () => {
    console.log(`Running on ${port}`);
})