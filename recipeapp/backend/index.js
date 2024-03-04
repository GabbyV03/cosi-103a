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
    ingredients: ['3 tablespoons unsalted butter', '2 garlic cloves', '1 shallot', '4 ounces crimini mushrooms', '4 ounces white button mushrooms', '2 tablespoons all-purpose flour', '3 cups chicken stock', '1/4 teaspoon fine sea salt', '1/4 teaspoon ground black pepper'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 3, 
    name: 'Gyudon', 
    ingredients: ['300 grams thinly sliced beef', '1 onion', '1 cup dashi stock', '3 tablespoons soy sauce', '3 tablespoons mirin', '2 tablespoons sugar'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 4, 
    name: 'Grilled Salmon with Lemon-Dill Sauce', 
    ingredients: ['4 salmon fillets', 'salt and pepper', '1/4 cup lemon juice', '2 tablespoons olive oil', '2 cloves garlic', '2 tablespoons fresh dill', '1 tablespoon honey'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 5, 
    name: 'Chocolate Chip Cookie', 
    ingredients: ['1 cup unsalted butter', '3/4 cup granulated sugar', '3/4 cup packed brown sugar', '1 teaspoon vanilla extract', '2 large eggs', '2 1/4 cups all-purpose flour', '1 teaspoon baking soda', '2 cups semisweet chocolate chips'], 
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 6, 
    name: 'Lemon Drizzle Cake', 
    ingredients: ['225 grams unsalted butter', '225 graams caster sugar', '4 large eggs', '225 grams self-raising flour', '1 teaspoon vanilla extract'],  
    steps: ['Chop lettuce', 'Slice tomato', 'Dice cucumber'] 
  },
  { 
    id: 7, 
    name: 'Cheesecake', 
    ingredients: ['1/2 cup graham cracker crumbs', '1/4 cup confectioners sugar', '6 tablespoons unsalted butter', '1/8 teaspoon table salt', '16 ounces cream cheese', '2 large eggs', '2/3 cup granulated sugar', '1 teaspoon vanilla extract'], 
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
