const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;


app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// put app.use first and then the middleware DO NOT PUT THESE FIRST
require("./server/config/mongoose.config")
require('./server/routes/authors.routes')(app);

app.listen(port, () => console.log(`The server is all fired up on port UwU ${port}`));