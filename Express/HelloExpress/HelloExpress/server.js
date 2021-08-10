const express = require("express");
const app = express();
const port = 8080;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send({ message: "OwO from app.get api"});
});




app.listen( port, () => console.log(`Listening OwO port: ${port}`));
