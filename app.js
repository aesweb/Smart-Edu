const express = require("express");

//MİDDLEWARES
const app = express();

app.get("/", (req, res) => {
  res.send("index page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
