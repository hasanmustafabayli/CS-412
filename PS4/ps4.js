const express = require('express');
const router = express.Router();
const request = require('request-promise-native');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
router.post('/', async (req, res) => {
  try {
    const city = req.body.city;
    const apiKey = process.env.API_KEY;
    const url = `${process.env.API_ENDPOINT}?access_key=${apiKey}&query=${city}`;
    const data = await request({url, json: true});
    res.render('result', {data});
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data from API');
  }
});
router.post('/async', async (req, res) => {
  try {
    const city = req.body.city;
    const apiKey = process.env.API_KEY;
    const url = `${process.env.API_ENDPOINT}?access_key=${apiKey}&query=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    res.render('result', {data});
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data from API');
  }
});
router.post('/callback', (req, res) => {
  const city = req.body.city;
  const apiKey = process.env.API_KEY;
  const url = `${process.env.API_ENDPOINT}?access_key=${apiKey}&query=${city}`;
  request({url, json: true}, (err, response, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from API');
    } else {
      res.render('result', {data});
    }
  });
});
module.exports = router;