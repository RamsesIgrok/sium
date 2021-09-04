require('dotenv').config()
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors());
app.get('/', async (req, res) => {
  await axios.get('https://shoppy.gg/api/v1/products', {
      headers: {
        'Authorization': process.env.API_KEY,
      }
  }).then(response => {
    res.send(response.data);
  }).catch(err => {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log(`[EXPRESS] http://localhost:${port}`);
});