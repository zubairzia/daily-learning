const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Point to the routes folder correctly
const mainRoutes = require('../routes');
app.use('/api', mainRoutes);

app.get('/', (req, res) => {
    res.status(200).send("CRM Backend API is running!");
});

module.exports = app;
