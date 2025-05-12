const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let products = JSON.parse(fs.readFileSync('./data/products.json'));
let customers = JSON.parse(fs.readFileSync('./data/customers.json'));
let orders = JSON.parse(fs.readFileSync('./data/orders.json'));

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/customers', (req, res) => res.json(customers));
app.post('/customers', (req, res) => {
  const newCustomer = { id: uuidv4(), ...req.body };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.get('/orders', (req, res) => res.json(orders));
app.post('/orders', (req, res) => {
  const { customerId, productId, quantity } = req.body;
  const customer = customers.find(c => c.id === customerId);
  const product = products.find(p => p.id === productId);
  if (!customer || !product) return res.status(400).json({ error: 'Invalid customer or product' });

  const order = {
    id: uuidv4(),
    customerId,
    productId,
    quantity,
    total: product.price * quantity,
    orderedAt: new Date().toISOString()
  };
  orders.push(order);
  res.status(201).json(order);
});

app.listen(port, () => console.log(`Monolith running at http://localhost:${port}`));
