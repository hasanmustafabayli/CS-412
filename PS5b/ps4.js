const express = require('express');
const router = express.Router();
const request = require('request-promise-native');
const redis = require('redis');

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

router.post('/', async (req, res) => {
  try {
    const city = req.body.city;
    const cacheKey = `weather:${city}`;

    redisClient.get(cacheKey, async (err, cachedData) => {
      if (cachedData) {
        return res.json({ data: JSON.parse(cachedData), source: 'cache' });
      } else {
        const apiKey = process.env.API_KEY;
        const url = `${process.env.API_ENDPOINT}?access_key=${apiKey}&query=${city}`;
        const data = await request({url, json: true});
        redisClient.setex(cacheKey, 15, JSON.stringify(data));
        res.json({ data: data, source: 'api' });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data from API');
  }
});

module.exports = router;
