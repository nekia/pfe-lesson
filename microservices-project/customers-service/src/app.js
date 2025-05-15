const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let customers = JSON.parse(fs.readFileSync('./data/customers.json'));

app.get('/customers', (req, res) => res.json(customers));
app.post('/customers', (req, res) => {
  const newCustomer = { id: uuidv4(), ...req.body };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.listen(port, () => console.log(`Customers service running at http://localhost:${port}`));