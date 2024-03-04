const path = require("path");
const express = require("express");
const app = express(); // create express app

// recipes in-memory storage initial recipes, keep id number for future use 
let recipes = [
  { 
    id: 1, 
    name: 'Salty Crispy Chicken', 
    ingredients: ['500 grams chicken thighs', '1 tablespoon salt', '1 teaspoon ground white pepper', '1 tablespoon cooking oil', '1 cup plain flour', '1 egg', '1 tablespoon water' ], 
    steps: ['Boil pasta', 'Add sauce', 'Sprinkle cheese'] 
  },
  { 
    id: 2, 
    name: 'Mushroom Soup', 
    ingredients: ['lettuce', 'tomato', 'cucumber'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 3, 
    name: 'Gyudon', 
    ingredients: ['lettuce', 'tomato', 'cucumber'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 4, 
    name: 'Grilled Salmon with Lemon-Dill Sauce', 
    ingredients: ['lettuce', 'tomato', 'cucumber'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 5, 
    name: 'Chocolate Chip Cookie', 
    ingredients: ['lettuce', 'tomato', 'cucumber'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 6, 
    name: 'Lemon Drizzle Cake', 
    ingredients: ['lettuce', 'tomato', 'cucumber'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 7, 
    name: 'Cheesecake', 
    ingredients: ['lettuce', 'tomato', 'cucumber'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
];

//RESTful RECIPES API (To be fixed/checked once implemented in React App)

// Route to get all recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// Route to add a new recipe
app.post('/api/recipes', (req, res) => {
  const { name, ingredients, steps } = req.body;
  if (!name || !ingredients || !steps || !Array.isArray(ingredients) || !Array.isArray(steps)) {
      return res.status(400).json({ message: 'Invalid request. Name, ingredients, and steps are required.' });
  }

  const newRecipe = {
      id: recipes.length + 1,
      name,
      ingredients,
      steps
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});


// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 8000
app.listen(8000, () => {
  console.log("server started on port 8000");
});
