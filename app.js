// app.js
const express = require("express");
const path = require("path");
const app = express();
const aboutRoutes = require("./routes/aboutRoutes");
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 3000;

// Statikus fájlok
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(logger);

// Routes
app.use("/about", aboutRoutes);

// Alapértelmezett útvonal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT}`);
});
