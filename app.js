const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

// routes
const invoices = require('./routes/api/invoices');

// Init Middleware
app.use(express.json({ extended: false }));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Connect Database
connectDB();

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/api', invoices);

app.listen(port, () => {
    console.log('Server is started');
})