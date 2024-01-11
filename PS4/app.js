require = require('esm')(module);

const express = require('express');
const app = express();
const ps4Router = require('./routes/ps4');

// Configure environment variables
require('dotenv').config();

// Configure middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Configure view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Mount the ps4 router
app.use('/ps4', ps4Router);

app.get('/', (req, res) => {
  res.render('form', { route: 'promise' });
});

app.get('/async-await', (req, res) => {
  res.render('form', { route: 'async-await' });
});

app.get('/callback', (req, res) => {
  res.render('form', { route: 'callback' });
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});