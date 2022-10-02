require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;
const apiPath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const header = {
  headers: {
    Authorization: process.env.TOKEN
  }
};

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// ---- PRODUCT OVERVIEW ROUTES ---- //

// returns array of 5 products
app.get('/products', (req, res) => {
  axios.get(apiPath + '/products', header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err)=> {
      res.send(err);
    })
});

// return all product level information for a specified id
app.get('/products/product_id', (req, res) => {
  axios.get(`${apiPath}/products/${req.body.id}`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

// return all styles available for a given product
app.get('/products/product_id/styles', (req, res) => {
  axios.get(`${apiPath}/products/${req.body.id}/styles`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

// return the ID's of products related to specified product_id
app.get('/products/product_id/related', (req, res) => {
  axios.get(`${apiPath}/products/${req.body.id}/related`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});


// ---- RATINGS & REVIEWS ROUTES ---- //



// ---- QUESTIONS & ANSWERS ROUTES ---- //



// ---- RELATED ITEM AND OUTFIT CREATION ROUTES ---- //



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});