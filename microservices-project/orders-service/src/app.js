const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let orders = JSON.parse(fs.readFileSync('./data/orders.json'));

// 外部サービスのベースURL
const PRODUCTS_SERVICE_URL = 'http://products-service:3000';
const CUSTOMERS_SERVICE_URL = 'http://customers-service:3000';

// 注文一覧を取得
app.get('/orders', (req, res) => res.json(orders));

// 新しい注文を作成
app.post('/orders', async (req, res) => {
  const { customerId, productId, quantity } = req.body;

  try {
    // Product サービスから商品情報を取得
    const productResponse = await axios.get(`${PRODUCTS_SERVICE_URL}/products`);
    const product = productResponse.data.find(p => p.id === productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Customer サービスから顧客情報を取得
    const customerResponse = await axios.get(`${CUSTOMERS_SERVICE_URL}/customers`);
    const customer = customerResponse.data.find(c => c.id === customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    // 注文を作成
    const order = {
      id: uuidv4(),
      customerId,
      customerName: customer.name,
      productId,
      productName: product.name,
      quantity,
      total: product.price * quantity,
      orderedAt: new Date().toISOString()
    };

    orders.push(order);
    fs.writeFileSync('./data/orders.json', JSON.stringify(orders, null, 2));
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.listen(port, () => console.log(`Orders service running at http://localhost:${port}`));