const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT}`);
});
