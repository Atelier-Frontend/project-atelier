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
  axios.get(`${apiPath}/products/${req.query.id}`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

// return all styles available for a given product
app.get('/products/product_id/styles', (req, res) => {
  axios.get(`${apiPath}/products/${req.query.id}/styles`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

// return the ID's of products related to specified product_id
app.get('/products/product_id/related', (req, res) => {
  axios.get(`${apiPath}/products/${req.query.id}/related`, header)
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
  axios.get(`${apiPath}/reviews?product_id=${req.query.id}`, header)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.send(err)
    })
})

// Returns review metadata for a given product
app.get('/reviews/meta', (req, res) => {
  axios.get(`${apiPath}/reviews/meta/?product_id=${req.query.id}`, header)
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
//Retrieves a list of questions for a particular product.
app.get('/qa/questions', (req, res) => {
  axios.get(`${apiPath}/qa/questions?${req._parsedOriginalUrl.query}`, header)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err)
    })
});

//Returns answers for a given question.
app.get(`/qa/questions/:question_id/answers`, (req, res) => {
  axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
  axios.get(`${apiPath}/qa/questions/${req.query.question_id}/answers`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err)
    })
});

//Adds a question for the given product.
app.post('/qa/questions', (req, res) => {
  axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
  axios.post(`${apiPath}/qa/questions`, req.body)
    .then((response) => {
      res.status(201).send('Question added')
    })
    .catch((err) => {
      res.send(err)
    })
});

//Adds an answer for the given question.
app.post(`/qa/questions/:question_id/answers`, (req, res) => {
  axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
  axios.post(`${apiPath}/qa/questions/${req.body.question_id}/answers`, req.body.body)
    .then((response) => {
      res.status(201).send('Answer added')
    })
    .catch((err) => {
      res.send(err)
    })
});

//Updates a question to show it was found helpful.
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
  axios.put(`${apiPath}/qa/questions/${req.body.question_id}/helpful`)
    .then((response) => {
      res.status(204).send('This question is helpful!')
    })
    .catch((err) => {
      res.send(err)
    })
});

//Updates a question to show it was reported.
app.put('/qa/questions/:question_id/report', (req, res) => {
  res.end()
});

//Updates an answer to show it was found helpful.
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
  axios.put(`${apiPath}/qa/answers/${req.body.answer_id}/helpful`)
    .then((response) => {
      console('why not???')
      res.status(204).send('This answer is helpful!')
    })
    .catch((err) => {
      res.send(err)
    })
});

//Updates an answer to show it has been reported.
app.put('/qa/answers/:answer_id/report', (req, res) => {
  res.end()
});



// ---- RELATED ITEM AND OUTFIT CREATION ROUTES ---- //


if (!module.parent) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

module.exports = app;