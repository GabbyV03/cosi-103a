const path = require("path");
const express = require("express");
const fetch = require("node-fetch");
const { DefaultAzureCredential } = require("@azure/identity");
const { CosmosClient } = require("@azure/cosmos");
const endpoint = 'https://recipeapp-groupt.documents.azure.com:443/'
const databaseName = '103a-recipeapp';
const containerName = 'recipeapp-container';

//Authenticate to CosmoDB 
const cosmosClient = new CosmosClient({
  endpoint,
  aadCredentials: new DefaultAzureCredential()
});

const app = express(); // create express app


app.use('/images', express.static(path.join(__dirname, "images")));


// Route to get all recipes
app.get('/api/recipes', async (req, res) => {
  const container  = cosmosClient.database(databaseName).container(containerName);
  const { resources } = await container.items.readAll().fetchAll();
  res.send(resources);
});

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

// Route to add a new recipe
app.post('/api/recipes', async (req, res) => {
  console.log(req.body);
  const { name, ingredients, steps } = req.body;

  // Validate request body
  if (!name || !ingredients || !steps || !Array.isArray(ingredients) || !Array.isArray(steps)) {
      return res.status(400).json({ message: 'Invalid request. Name, ingredients, and steps are required.' });
  }

  try {
      // Create a new recipe object
      const recipe = {
          recipe_id: Math.random().toString(36).substring(7), // Generate a unique recipe_id
          name,
          ingredients,
          steps,
          imageUrl: "/images/placeholder.png"
      };

      // Add the recipe to Cosmos DB
      const { resource: createdRecipe } = await cosmosClient
          .database(databaseName)
          .container(containerName)
          .items.create(recipe);

      res.status(201).json(createdRecipe);
  } catch (error) {
      console.error("Error adding recipe to Cosmos DB:", error);
      res.status(500).json({ message: 'Internal server error.' });
  }
});

// Route to edit a recipe
app.put('/api/recipes/:recipe_id', async (req, res) => {
  const recipeId = req.params.recipe_id;
  const updatedRecipe = req.body;

  try {
    const container = cosmosClient.database(databaseName).container(containerName);
    const { resource } = await container.item(recipeId).replace(updatedRecipe);
    res.json(resource);
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Route to delete a recipe
app.delete('/api/recipes/:id', async (req, res) => {
  const recipeId = req.params.id;

  try {
    const container = cosmosClient.database(databaseName).container(containerName);
    console.log('Deleting item with recipeId:', recipeId);
    console.log('Container ID:', container.id);
    await container.item(recipeId).delete();
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Route for ingredient search
app.get('/api/ingredients/search', async (req, res) => {
  const query = req.query.q;
  const FOOD_DATA_API_KEY = process.env.NUTRITION_API_KEY;
  //for codespace testing:
  //const FOOD_DATA_API_KEY = 's28QNO0niy9zMeWXZQ3ReV7NSiI6LPtG81MnzkAf'; 
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&api_key=${FOOD_DATA_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    if (data.foods && data.foods.length > 0) {
      const fdcId = data.foods[0].fdcId;
      const foodDetailsUrl = `https://fdc.nal.usda.gov/fdc-app.html#/food-details/${fdcId}/nutrients`;
      res.json({ url: foodDetailsUrl });
    } else {
      res.status(404).json({ message: 'No results found' });
    }
  } catch (error) {
    console.error('Error searching ingredient:', error);
    res.status(500).json({ message: 'Error searching ingredient' });
  }
});

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.use(express.json()); // To parse JSON body in POST requests

// start express server on port 8000
app.listen(8000, () => {
  console.log("server started on port 8000");
});
