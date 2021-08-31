const express = require('express');
const app = express();
const port = process.env.port || 3000;
const connectDB = require('./config/db');

// routes
const invoices = require('./routes/api/invoices');

// Init Middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/invoices', invoices);

app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`)
})