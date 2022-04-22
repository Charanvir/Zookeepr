const express = require("express");
const PORT = process.env.PORT || 3001;
// this is to set up the server
const app = express();
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const fs = require("fs");
const path = require("path");
app.use(express.static('public'))

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// this should always be last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



