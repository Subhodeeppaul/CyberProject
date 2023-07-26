const express = require("express");
const notes = require("./daata/notes");
const dotenv = require('dotenv');
const app = express();
const connectDB= require("./config/db");
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
dotenv.config();
connectDB();
app.use(express.json());
//app.get('/', (req, res) => {
  //  res.send("Api runing");
//});
//app.get('/api/notes', (req, res) => {
  //  res.json(notes);
//});
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Running"));