const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middlewares/logger');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger); 

app.use('/api/students', studentRoutes);

app.listen(5000 , async() => {
    try {
        connectDB()
        console.log("server running")
    }

    catch (error) {
        console.error("Failed to connect", error);
    }
})