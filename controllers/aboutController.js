// controllers/aboutController.js
const aboutData = require("../models/aboutModel");

const getAbout = (req, res) => {
  res.json(aboutData);
};

module.exports = {
  getAbout
};
