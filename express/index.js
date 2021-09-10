require('dotenv').config()
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const app = express();
const port = 5000;

app.use(cors());
app.get('/', async (req, res) => {
  const finalRes = [];

  for (let i = 1; i > 0; i++) {
    const response = await axios.get(`https://shoppy.gg/api/v1/products?page=${i}`, {
      headers: {
        'Authorization': process.env.API_KEY,
      }
    });
    if (response.data.length == 0) break;
    finalRes.push(response.data);
  }

  res.send(_.flatten(finalRes));
});

app.listen(port, () => {
  console.log(`[EXPRESS] http://localhost:${port}`);
});
