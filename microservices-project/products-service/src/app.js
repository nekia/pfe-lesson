const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let products = JSON.parse(fs.readFileSync('./data/products.json'));

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => console.log(`Products service running at http://localhost:${port}`));