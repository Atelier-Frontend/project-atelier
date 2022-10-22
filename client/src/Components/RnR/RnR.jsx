import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Ratings from "./Ratings/Ratings.jsx";
import Reviews from "./Reviews/Reviews.jsx";

export default function RnR(props) {

  const [reviews, setReviews] = useState({});
  const [ratings, setRatings] = useState({});
  const [score, setScore] = useState(0);
  const [recommended, setRecommended] = useState(0);
  const [chart, setChart] = useState([]);
  const [result, setResult] = useState([]);


  useEffect(() => {
    getReviews(props);
    getRatings(props);
  }, [props])

  useEffect(() => {
    ratings.recommended && getRecommended(ratings.recommended);
    ratings.ratings && ratingsChart(ratings.ratings)
  }, [ratings])

  useEffect(() => {
    reviews.results && setResult(reviews.results.sort(sortByDefault))
  }, [reviews])

  function dropdownHandler(k) {
    if (k === "helpfulness") {
      setResult([...reviews.results.sort(sortByHelpfulness)])
    } else if (k === "date") {
      setResult([...reviews.results.sort(sortByDate)])
    } else {
      setResult([...reviews.results.sort(sortByDefault)])
    }
  }

  function getReviews(props) {
    axios.get('/reviews', {
      params: {id: props.products.id}
    })
    .then((response) => {
      setReviews(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function getRatings(props) {
    axios.get('/reviews/meta', {
      params: {id: props.products.id}
    })
    .then((response) => {
      setRatings(response.data);
      return getAverage(response.data.ratings);
    })
    .catch((err) => {
      console.log(err);
    })
    .then((avg) => {
      setScore(avg)
    })
  }

  function getAverage(ratings) {
    var s = 0;
    var responses = 0;
    var average;
    for (var key in ratings) {
      s += (ratings[key] * key);
      responses += Number(ratings[key]);
    }
    average = s / responses;
    return (Math.round(average * 4) / 4).toFixed(2);
  }

  function getRecommended(r) {
    var t = Number(r['true']);
    var f = Number(r['false']);
    var total = t + f;
    setRecommended(Math.floor(100 * t / total))
  }

  function ratingsChart(r) {
    var obj = {};
    for (let i = 1; i < 6; i++) {
      if (r[i] === undefined) {
        obj[i] = 0;
      } else {
        obj[i] = r[i];
      }
    }
    var ratingsArr = Object.values(obj).sort((a,b)=>(b-a));
    setChart(ratingsArr)
  }

  function sortByHelpfulness(a, b) {
    return ( a.helpfulness < b.helpfulness ) ? 1 : -1;
  }

  function sortByDate(a, b) {
    return ( a.date < b.date) ? 1 : -1;
  }

  function sortByDefault(a, b) {
      var result = 0;
      result = ( a.date < b.date) ? 1 : -1;
      result = ( a.helpfulness < b.helpfulness ) ? 1 : -1;
      return result;
  }

  return(<>
    <h4>Ratings & Reviews</h4>
    <div className="Ratings-Reviews">
      <Ratings ratings={ratings}
               score={score}
               recommended={recommended}
               chart={chart} />
      <Reviews reviews={reviews}
               result={result}
               dropdownHandler={dropdownHandler}
               product_id={props.products.id}
               />
    </div>
  </>)
}