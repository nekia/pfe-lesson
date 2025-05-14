# Customers Service

This directory contains the implementation of the Customers Service for the microservices project.

## Overview

The Customers Service is responsible for managing customer data and providing API endpoints to interact with customer information. It is built using Node.js and Express.

## Structure

- `src/app.js`: Entry point for the Customers Service, where the Express application is created and API endpoints are defined.
- `src/data/customers.json`: JSON file that stores customer data.
- `Dockerfile`: Configuration for building the Docker image for the Customers Service.
- `package.json`: npm configuration file that defines dependencies and scripts for the Customers Service.

## API Endpoints

- `GET /customers`: Retrieve a list of all customers.
- `POST /customers`: Create a new customer.

## Running the Service

To run the Customers Service, you can use Docker. Make sure to build the Docker image first and then run the container.

## License

This project is licensed under the MIT License.