const connectDB = require('./config/db');
const express = require('express')
const blogRoutes = require('./routes/blogrouter')
const app = express();
const Port = 4001;

// express app

app.use(express.json());

app.get('/', (req, res) => res.send('API Running!'));

// routes
app.use('/api/blogs', blogRoutes);

app.listen(Port, () => {console.log(`Server is runing on port ${Port}`)});