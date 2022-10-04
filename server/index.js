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
  axios.get(`${apiPath}/products`, header)
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

// Returns a list of reviews for a particular product
app.get('/reviews', (req, res) => {
  axios.get(`${apiPath}/reviews?product_id=${req.body.id}`, header)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.send(err)
    })
})

// Returns review metadata for a given product
app.get('/reviews/meta', (req, res) => {
  axios.get(`${apiPath}/reviews/meta/?product_id=${req.body.id}`, header)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.send(err)
    })
})

// Adds a review for the given product
app.post('/reviews', (req, res) => {
  axios.post(`${apiPath}/reviews/meta/?product_id=${req.body.id}`, header)
    .then(()=> {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err)
    })
})

//Updates a review to show it was found helpful
app.put('/reviews/:review_id/helpful', (req, res) => {
  axios.put(`${apiPath}/reviews/meta/?review_id=${req.body.id}`, header)
    .then(()=> {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err)
    })
})

//Updates a review to show it was reported
app.put('/reviews/:review_id/report', (req, res) => {
  axios.put(`${apiPath}/reviews/meta/?review_id=${req.body.id}`, header)
    .then(()=> {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err)
    })
})


// ---- QUESTIONS & ANSWERS ROUTES ---- //



// ---- RELATED ITEM AND OUTFIT CREATION ROUTES ---- //



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});