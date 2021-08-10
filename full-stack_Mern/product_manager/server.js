const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;

require("./server/config/mongoose.config")

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

require('./server/routes/products.routes')(app);

app.listen(port, () => console.log(`The server is all fired up on port UwU ${port}`));
