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
app.post('/api/recipes', (req, res) => {
  console.log(req.body);
  const { name, ingredients, steps } = req.body;
  if (!name || !ingredients || !steps || !Array.isArray(ingredients) || !Array.isArray(steps)) {
      return res.status(400).json({ message: 'Invalid request. Name, ingredients, and steps are required.' });
  }
  //const rp = req.body;
  //console.log(rp.name);

  const placeholderImageUrl = '/images/placeholder.png';

  const newRecipe = {
      id: recipes.length + 1,
      name,
      ingredients,
      steps,
      imageUrl: placeholderImageUrl
      
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
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
