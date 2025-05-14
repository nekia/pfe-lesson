# Orders Service

This is the Orders Service of the microservices project. It is responsible for managing customer orders, including creating new orders and retrieving existing ones.

## Features

- Create new orders
- Retrieve all orders
- Validate customer and product information before creating an order

## Directory Structure

- `src/app.js`: Entry point for the Orders Service, setting up the Express application and API endpoints.
- `src/data/orders.json`: JSON file that stores order data.
- `Dockerfile`: Configuration for building the Docker image for the Orders Service.
- `package.json`: npm configuration file defining dependencies and scripts.

## Getting Started

To run the Orders Service locally, follow these steps:

1. Clone the repository.
2. Navigate to the `orders-service` directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the service:
   ```
   npm start
   ```

## Docker

To build and run the Orders Service in a Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t orders-service .
   ```
2. Run the Docker container:
   ```
   docker run -p 3001:3000 orders-service
   ```

## API Endpoints

- `POST /orders`: Create a new order.
- `GET /orders`: Retrieve all orders.

## License

This project is licensed under the MIT License.