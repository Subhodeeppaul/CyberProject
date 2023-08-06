const express = require("express");
const notes = require("./daata/notes"); // Fix the typo here
const dotenv = require('dotenv');
const app = express();
const connectDB = require("./config/db"); // Make sure the path to the db.js file is correct
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const cors = require('cors');
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
//Remove these test routes as they are not needed for this scenario
 app.get('/', (req, res) => {
     res.send("Api runing");
 });
 app.get('/api/notes', (req, res) => {
    res.json(notes);
 });

app.use('/api/users', userRoutes);
//app.use(notFound);
//app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
