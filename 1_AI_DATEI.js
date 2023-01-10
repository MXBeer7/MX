const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/compare-prices', async (req, res) => {
  try {
    // Get shoe prices from different retailers
    const price1 = await fetch('https://retailer1.com/shoes/123').then(response => response.json());
    const price2 = await fetch('https://retailer2.com/shoes/123').then(response => response.json());
    const price3 = await fetch('https://retailer3.com/shoes/123').then(response => response.json());

    // Compare prices and return the lowest price
    const lowestPrice = Math.min(price1, price2, price3);
    res.send({ lowestPrice });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.listen(3000, () => console.log('Webservice listening on port 3000'));
