const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/test", (req, res) => {
    res.send("Test route");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})