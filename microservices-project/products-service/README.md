# Products Service

This is the Products Service of the microservices project. It is responsible for managing product-related operations, including retrieving product information and adding new products.

## Directory Structure

- `src/app.js`: Entry point for the Products Service, setting up the Express application and defining API endpoints.
- `src/data/products.json`: JSON file that stores product data.
- `Dockerfile`: Configuration for building the Docker image for the Products Service.
- `package.json`: npm configuration file defining dependencies and scripts for the Products Service.

## API Endpoints

### GET /products
Retrieves a list of all products.

### POST /products
Adds a new product to the product list. The request body should contain the product details.

## Getting Started

1. Clone the repository.
2. Navigate to the `products-service` directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the service:
   ```
   npm start
   ```

## Docker

To build and run the Docker container for the Products Service, use the following commands:

1. Build the Docker image:
   ```
   docker build -t products-service .
   ```
2. Run the Docker container:
   ```
   docker run -p 3000:3000 products-service
   ```

## License

This project is licensed under the MIT License.