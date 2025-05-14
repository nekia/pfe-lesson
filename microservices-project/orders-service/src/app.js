const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;

app.use(bodyParser.json());

let orders = JSON.parse(fs.readFileSync('./data/orders.json'));

app.get('/orders', (req, res) => res.json(orders));
app.post('/orders', (req, res) => {
  const { customerId, productId, quantity } = req.body;
  const order = {
    id: uuidv4(),
    customerId,
    productId,
    quantity,
    total: req.body.price * quantity, // Assuming price is passed in the request body
    orderedAt: new Date().toISOString()
  };
  orders.push(order);
  res.status(201).json(order);
});

app.listen(port, () => console.log(`Orders service running at http://localhost:${port}`));