# Microservices Project

This project is designed to demonstrate a microservices architecture using Docker. It consists of three independent services: Products Service, Customers Service, and Orders Service. Each service is encapsulated in its own Docker container and communicates with each other through RESTful APIs.

## Project Structure

```
microservices-project
├── products-service
│   ├── src
│   │   ├── app.js          # Entry point for the Products Service
│   │   └── data
│   │       └── products.json # JSON file containing product data
│   ├── Dockerfile          # Dockerfile for building the Products Service image
│   ├── package.json        # npm configuration file for Products Service
│   └── README.md           # Documentation for Products Service
├── customers-service
│   ├── src
│   │   ├── app.js          # Entry point for the Customers Service
│   │   └── data
│   │       └── customers.json # JSON file containing customer data
│   ├── Dockerfile          # Dockerfile for building the Customers Service image
│   ├── package.json        # npm configuration file for Customers Service
│   └── README.md           # Documentation for Customers Service
├── orders-service
│   ├── src
│   │   ├── app.js          # Entry point for the Orders Service
│   │   └── data
│   │       └── orders.json   # JSON file containing order data
│   ├── Dockerfile          # Dockerfile for building the Orders Service image
│   ├── package.json        # npm configuration file for Orders Service
│   └── README.md           # Documentation for Orders Service
├── docker-compose.yml      # Docker Compose configuration file
└── README.md               # Documentation for the entire project
```

## Getting Started

To get started with this project, you will need to have Docker and Docker Compose installed on your machine. Follow the steps below to run the services:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Build and run the services using Docker Compose:

   ```
   docker-compose build --no-cache
   docker-compose up -d
   ```

4. Access the services at the following endpoints:
   - Products Service: `http://localhost:3001/products`
   - Customers Service: `http://localhost:3002/customers`
   - Orders Service: `http://localhost:3003/orders`
