const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

// ---- PRODUCT OVERVIEW ROUTES ---- //



// ---- RATINGS & REVIEWS ROUTES ---- //



// ---- QUESTIONS & ANSWERS ROUTES ---- //



// ---- RELATED ITEM AND OUTFIT CREATION ROUTES ---- //



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});