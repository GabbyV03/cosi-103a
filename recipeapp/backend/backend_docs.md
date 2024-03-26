# index.js

The backend is built using Node.js and Express.js, and it interacts with a Cosmos DB database for storing and retrieving recipe data. It also utilizes an external API for ingredient search.

## Description

The `backend.js` file contains the server-side code for the Recipe App project. It handles the logic and functionality related to the backend operations, such as handling API requests, interacting with the database, and processing data.

## Prerequisites

Before running the backend, ensure that you have the following:
1. Node.js installed on your machine
2. Access to a Cosmos DB account with the appropriate endpoint and credentials
3. An API key for the ingredient search functionality (stored in the NUTRITION_API_KEY environment variable)

## Dependencies

The backend relies on the following dependencies:
express
node-fetch
@azure/identity
@azure/cosmos
body-parser: The backend uses the body-parser middleware to parse JSON request bodies in POST requests.

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/recipes`: This endpoint retrieves all recipes from the Cosmos DB database.
Response: An array of recipe objects
- `POST /api/recipes`: This endpoint adds a new recipe to the Cosmos DB database.
Request: name (string, required), ingredients (array, required), steps (array, required)
Response: The created recipe object
Warning: If the request body is invalid (missing required fields or incorrect data types), the endpoint will respond with a 400 Bad Request status and an error message.
- `GET /api/ingredients/search`: This endpoint performs an ingredient search using an external API.
Response: An object containing the URL of the ingredient details page.
Warning: If no results are found, the endpoint will respond with a 404 Not Found status and an error message.

## Error Handling

The backend handles errors gracefully and provides appropriate error responses:

If there is an error while adding a recipe to Cosmos DB, the endpoint will respond with a 500 Internal Server Error status and an error message.
If there is an error while searching for an ingredient, the endpoint will respond with a 500 Internal Server Error status and an error message.
