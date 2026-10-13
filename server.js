
const express = require("express");
const path = require("path");

const app = express();
const publicFolder = path.join(__dirname, "public");

app.use(express.static(publicFolder));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Website running on port ${port}`);
});
