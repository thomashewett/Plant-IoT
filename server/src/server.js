const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const plants = require('./routes/api/plants');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/plants', plants);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
