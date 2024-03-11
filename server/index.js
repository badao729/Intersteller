const express = require('express');
const cors = require('cors');
const starRoutes = require('./routes/star');
const app = express();

// Allows GET requests to get static assets in /public folder
app.use(express.static("public"));

// log the request to the console.
const time = new Date();
app.use((req, _res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url} at ${time}`);

    next();
})
// Enable CORS so API can be used on client-side
app.use(cors());

// Enable JSON parsing for reading POST/PUT requests
app.use(express.json());

// Enable routes with paths starting with /contestants
app.use("/stars", starRoutes);

app.listen(8080, function() {
    console.log("Server is now listening at http://localhost:8080");
});