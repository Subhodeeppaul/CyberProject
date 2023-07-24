const express = require("express");
const notes = require("./daata/notes");
const dotenv = require('dotenv');
const app = express();
const connectDB= require("./config/db");
const userRoutes=require('./routes/userRoutes');
dotenv.config();
connectDB();
app.get('/', (req, res) => {
    res.send("Api runing");
});
app.get('/api/notes', (req, res) => {
    res.json(notes);
});
app.use('/api/users',userRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Running"));