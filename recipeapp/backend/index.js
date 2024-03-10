const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use('/images', express.static(path.join(__dirname, "images")));
// recipes in-memory storage initial recipes, keep id number for future use 
let recipes = [
  { 
    id: 1, 
    name: 'Salty Crispy Chicken', 
    ingredients: ['500 grams chicken thighs', '1 tablespoon salt', '1 teaspoon ground white pepper', '1 tablespoon cooking oil', '1 cup plain flour', '1 egg', '1 tablespoon water' ], 
    steps: ['Cut chicken into pieces. Mix seasonings with chicken. Marinate for at least an hour.', 'Combine ingredients for batter. Set aside.', 'Heat oil in a pan over medium heat. Dip marinated chicken pieces first in batter, then deep fry until golden brown and crisp. Drain excess oil on paper towels. Serve immediately.'], 
    imageUrl: "/images/1.jpeg"
  },
  { 
    id: 2, 
    name: 'Mushroom Soup', 
    ingredients: ['3 tablespoons unsalted butter', '2 garlic cloves', '1 shallot', '4 ounces crimini mushrooms', '4 ounces white button mushrooms', '2 tablespoons all-purpose flour', '3 cups chicken stock', '1/4 teaspoon fine sea salt', '1/4 teaspoon ground black pepper'], 
    steps: ['Melt 2 tablespoons of the butter in a large pot such as a Dutch oven over medium-high heat. Add the garlic and shallot, cook for 1 minute, until they begin to soften. Add the mushrooms and cook for about 3 minutes, until tender and browned. Transfer all the contents of the pot to a bowl.', 'Add the remaining 1 tablespoon of butter to the pot. Once melted, sprinkle in the flour and whisk it quickly into a paste. Reduce the heat to medium. Add the stock a little at a time, whisking out the clumps between each addition.', 'Increase the heat back to medium-high and allow the soup to simmer well for 3 minutes. Add the mushrooms back to the pot and continue to cook for 2 more minutes. The stock will thicken slightly to be somewhat creamy.', 'Let cook for 3 to 4 minutes, then ladle into bowls. Garnish with mushrooms and parsley, if desired.'],
    imageUrl: "/images/2.jpeg"
  },
  { 
    id: 3, 
    name: 'Gyudon', 
    ingredients: ['300 grams thinly sliced beef', '1 onion', '1 cup dashi stock', '3 tablespoons soy sauce', '3 tablespoons mirin', '2 tablespoons sugar'], 
    steps: ['Thinly slice the beef and onion.', ' In a pan, cook the beef until browned. Add onions and cook until softened.', 'Add the dashi, soy sauce, mirin, and sugar. Simmer until the sauce thickens.','Serve the beef and onion over a bowl of hot steamed rice.'],
    imageUrl: "/images/3.jpeg"
  },
  { 
    id: 4, 
    name: 'Grilled Salmon with Lemon-Dill Sauce', 
    ingredients: ['4 salmon fillets', 'salt and pepper', '1/4 cup lemon juice', '2 tablespoons olive oil', '2 cloves garlic', '2 tablespoons fresh dill', '1 tablespoon honey'], 
    steps: ['Preheat grill to medium-high heat.', 'Season salmon fillets with salt and pepper.', 'In a small bowl, mix together lemon juice, olive oil, garlic, dill, and honey. Brush mixture over salmon fillets.', 'Grill salmon for 4-5 minutes per side, or until fish flakes easily with a fork.'],
    imageUrl: "/images/4.jpeg" 
  },
  { 
    id: 5, 
    name: 'Chocolate Chip Cookie', 
    ingredients: ['1 cup unsalted butter', '3/4 cup granulated sugar', '3/4 cup packed brown sugar', '1 teaspoon vanilla extract', '2 large eggs', '2 1/4 cups all-purpose flour', '1 teaspoon baking soda', '2 cups semisweet chocolate chips'], 
    steps: ['Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper.', 'In a large bowl, beat the softened butter, granulated sugar, brown sugar, and vanilla extract until creamy. Add the eggs, one at a time, beating well after each addition.', 'In another bowl, whisk together the flour, baking soda, and salt. Gradually beat the dry ingredients into the butter mixture.','Stir in the chocolate chips by hand.', 'Drop rounded tablespoons of dough onto the prepared baking sheets. Bake for 9 to 11 minutes or until golden brown.'],
    imageUrl: "/images/cookie.png" 
  },
  { 
    id: 6, 
    name: 'Lemon Drizzle Cake', 
    ingredients: ['225 grams unsalted butter', '225 graams caster sugar', '4 large eggs', '225 grams self-raising flour', '1 teaspoon vanilla extract'],  
    steps: ['Preheat your oven to 180°C (350°F). Grease and line a loaf tin with parchment paper or a loaf liner.', 'In a large bowl, beat together the softened butter and sugar until creamy. Gradually add the eggs, beating well after each addition.', 'Sift in the remaining flour and baking powder, folding gently into the mixture until well combined.', 'Stir in the lemon zest and lemon juice.', 'Pour the batter into the prepared tin and bake for 45 minutes or until a skewer inserted into the center comes out clean.'],
    imageUrl: "/images/lemon_drizzle_cake.png" 
  },
  { 
    id: 7, 
    name: 'Cheesecake', 
    ingredients: ['1/2 cup graham cracker crumbs', '1/4 cup confectioners sugar', '6 tablespoons unsalted butter', '1/8 teaspoon table salt', '16 ounces cream cheese', '2 large eggs', '2/3 cup granulated sugar', '1 teaspoon vanilla extract'], 
    steps: ['Preheat the oven to 350°F.', 'To make the crust: Stir together all of the crust ingredients, mixing until thoroughly combined.', ' Press the crumbs into the bottom and up the sides of your pie pan','To make the filling: Mix together the room-temperature cream cheese and sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth.','Set the pie pan onto a baking sheet, if desired; this protects the bottom of the crust from any potential scorching. Pour the filling into the crust.','To bake the cheesecake: Place the cheesecake in the oven. Bake it for 30 minutes.', 'Once the cake is cool, refrigerate it, covered, until you are ready to serve it.'],
    imageUrl: "/images/cheesecake.jpg" 
  },
];

//RESTful RECIPES API (To be fixed/checked once implemented in React App)

// Route to get all recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
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
