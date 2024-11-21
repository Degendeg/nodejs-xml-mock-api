const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Set Content-Type for XML res
app.use((req, res, next) => {
  res.header("Content-Type", "application/xml");
  next();
});

// Load XML
const loadXML = (fileName) => {
  return fs.readFileSync(path.join(__dirname, "data", fileName), "utf-8");
};

// Routes
app.get("/", (req, res) => res.send(loadXML("home.xml")));
app.get("/authors", (req, res) => res.send(loadXML("authors.xml")));
app.get("/articles", (req, res) => res.send(loadXML("articles.xml")));
app.get("/comments", (req, res) => res.send(loadXML("comments.xml")));

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock API running on http://localhost:${PORT}`);
});