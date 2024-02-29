// import logo from './logo.svg';
import Accordion from 'react-bootstrap/Accordion';
import './App.css';
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import CookingMode from './Cookingmode';


function App(props) {

  const recipes = [
     {
          title: 'Salty Crispy Chicken',
          steps: ['Step 1', 'Step 2', 'Step 3'],
          instructions: ['Cut chicken into pieces. Mix seasonings with chicken. Marinate for at least an hour.', 'Combine ingredients for batter. Set aside.', 'Heat oil in a pan over medium heat. Dip marinated chicken pieces first in batter, then deep fry until golden brown and crisp. Drain excess oil on paper towels. Serve immediately.']
     },
     {
          title: 'Mushroom Soup',
          steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
          instructions: ['Melt 2 tablespoons of the butter in a large pot such as a Dutch oven over medium-high heat. Add the garlic and shallot, cook for 1 minute, until they begin to soften. Add the mushrooms and cook for about 3 minutes, until tender and browned. Transfer all the contents of the pot to a bowl.', 'Add the remaining 1 tablespoon of butter to the pot. Once melted, sprinkle in the flour and whisk it quickly into a paste. Reduce the heat to medium. Add the stock a little at a time, whisking out the clumps between each addition.', 'Increase the heat back to medium-high and allow the soup to simmer well for 3 minutes. Add the mushrooms back to the pot and continue to cook for 2 more minutes. The stock will thicken slightly to be somewhat creamy.', 'Let cook for 3 to 4 minutes, then ladle into bowls. Garnish with mushrooms and parsley, if desired.']
     },
     {
          title: 'Gyudon',
          steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
          instructions: ['Thinly slice the beef and onion.', ' In a pan, cook the beef until browned. Add onions and cook until softened.', 'Add the dashi, soy sauce, mirin, and sugar. Simmer until the sauce thickens.','Serve the beef and onion over a bowl of hot steamed rice.']
     },
     {
          title: 'Grilled Salmon',
          steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
          instructions: ['Preheat grill to medium-high heat.', 'Season salmon fillets with salt and pepper.', 'In a small bowl, mix together lemon juice, olive oil, garlic, dill, and honey. Brush mixture over salmon fillets.', 'Grill salmon for 4-5 minutes per side, or until fish flakes easily with a fork.']
     },
     {
          title: 'Chocolate Chip Cookies',
          steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
          instructions: ['Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper.', 'In a large bowl, beat the softened butter, granulated sugar, brown sugar, and vanilla extract until creamy. Add the eggs, one at a time, beating well after each addition.', 'In another bowl, whisk together the flour, baking soda, and salt. Gradually beat the dry ingredients into the butter mixture.','Stir in the chocolate chips by hand.', 'Drop rounded tablespoons of dough onto the prepared baking sheets. Bake for 9 to 11 minutes or until golden brown.']
     },
     {
          title: 'Lemon Drizzle Cake',
          steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
          instructions: ['Preheat your oven to 180°C (350°F). Grease and line a loaf tin with parchment paper or a loaf liner.', 'In a large bowl, beat together the softened butter and sugar until creamy. Gradually add the eggs, beating well after each addition.', 'Sift in the remaining flour and baking powder, folding gently into the mixture until well combined.', 'Stir in the lemon zest and lemon juice.', 'Pour the batter into the prepared tin and bake for 45 minutes or until a skewer inserted into the center comes out clean.'] 
     },
     {
          title: 'Cheesecake',
          steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7'],
          instructions: ['Preheat the oven to 350°F.', 'To make the crust: Stir together all of the crust ingredients, mixing until thoroughly combined.', ' Press the crumbs into the bottom and up the sides of your pie pan','To make the filling: Mix together the room-temperature cream cheese and sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth.','Set the pie pan onto a baking sheet, if desired; this protects the bottom of the crust from any potential scorching. Pour the filling into the crust.','To bake the cheesecake: Place the cheesecake in the oven. Bake it for 30 minutes.', 'Once the cake is cool, refrigerate it, covered, until you are ready to serve it.']
     },
     
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null); // Define selectedRecipe state variable

  // Function to handle opening cooking mode
  const openCookingMode = (recipeTitle) => {
     const foundRecipe = recipes.find(recipe => recipe.title === recipeTitle);
     setSelectedRecipe(foundRecipe);
   };

  // Function to handle closing cooking mode
  const closeCookingMode = () => {
     setSelectedRecipe(null);
   };


  return (
    <div className="App">
      <h1>Best Recipes</h1>
      <BasicExamples recipes={recipes} openCookingMode={openCookingMode} />
      {selectedRecipe && <CookingMode recipe={selectedRecipe} onClose={closeCookingMode} />}
    </div>
  );
}


function BasicExamples(props, recipes, openCookingMode) {
openCookingMode= props.openCookingMode;


//alert(props.rtnGlist);
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Salty Crispy Chicken (Salted Fried Chicken)</Accordion.Header>
        <Accordion.Body>
        <div align="left">
        Description:<br />
                      The crispy coating is achieved through frying, and the salt seasoning enhances
                      the flavor of the chicken, creating a savory taste.<br />
                      Different cuisines may have their own variations of salty crispy chicken,
                      incorporating unique spices, herbs, or cooking techniques. <br />
        Procedure:<br />
                      1.Cut chicken into pieces. Mix seasonings with chicken. Marinate for at least an hour.<br />
                      2.Combine ingredients for batter. Set aside.<br />
                      3.Heat oil in a pan over medium heat. Dip marinated chicken pieces first in batter, 
                      then deep fry until golden brown and crisp. Drain excess oil on paper towels. Serve immediately.<br />
                      Ingredients:<br />
                     500 grams chicken thighs<br />
                     1 tablespoon salt<br />
                     1 teaspoon ground white pepper<br />
                     1 tablespoon cooking oil<br />
                    For batter:<br />
                     1 cup plain flour<br />
                     1 egg<br />
                     1 tablespoon water<br />  
          < img src="1.jpeg"width="300px" height="200px"></img>
          <button onClick={() => openCookingMode('Salty Crispy Chicken')}> cooking mode </button>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Mushroom soup</Accordion.Header>
        <Accordion.Body>
        <div align="left">
        Description:<br />
                      This creamy mushroom soup is made with three types of mushrooms and chicken stock.<br />
        Procedure:<br />
                      1.Melt 2 tablespoons of the butter in a large pot such as a Dutch oven over medium-high heat. Add the garlic and shallot, cook for 1 minute, until they begin to soften. Add the mushrooms and cook for about 3 minutes, until tender and browned. Transfer all the contents of the pot to a bowl.<br />
                      2.Add the remaining 1 tablespoon of butter to the pot. Once melted, sprinkle in the flour and whisk it quickly into a paste. Reduce the heat to medium. Add the stock a little at a time, whisking out the clumps between each addition.<br />
                      3.Increase the heat back to medium-high and allow the soup to simmer well for 3 minutes. Add the mushrooms back to the pot and continue to cook for 2 more minutes. The stock will thicken slightly to be somewhat creamy.<br />
                      4.Let cook for 3 to 4 minutes, then ladle into bowls. Garnish with mushrooms and parsley, if desired.<br />
                      
                      Ingredients:<br />
                      3 tablespoons unsalted butter<br />
                      2 garlic cloves, minced<br />
                      1 shallot, finely chopped<br />
                      4 ounces crimini mushrooms, chopped<br />
                      4 ounces white button mushrooms, chopped<br />
                      2 tablespoons all-purpose flour<br />
                      3 cups chicken stock<br />
                      ¼ teaspoon fine sea salt, or to taste<br />
                      ¼ teaspoon ground black pepper, or to taste<br />
                      Sliced sautéed mushrooms for garnish, optional<br />
                      Chopped parsley for garnish, optional<br />
        < img src="2.jpeg"width="300px" height="200px"></img>
        <button onClick={() => openCookingMode('Mushroom Soup')}> cooking mode </button>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Gyudon (Japanese Beef Bowl)</Accordion.Header>
        <Accordion.Body>
          <div align="left">
            Description:<br />
            Japanese beef bowl consists of thinly sliced beef and onions
            simmered in a sweet and delicious sauce, served over steamed rice<br />
            Procedure:<br />
            1. Thinly slice the beef and onion.<br />
            2. In a pan, cook the beef until browned. Add onions and cook until softened.<br />
            3. Add the dashi, soy sauce, mirin, and sugar. Simmer until the sauce thickens.<br />
            4. Serve the beef and onion over a bowl of hot steamed rice.<br />
            Ingredients:<br />
            300g thinly sliced beef<br />
            1 onion, thinly sliced<br />
            1 cup dashi stock<br />
            3 tablespoons soy sauce<br />
            3 tablespoons mirin<br />
            2 tablespoons sugar<br />       
            <img src="3.jpeg" width="300px" height="200px" alt="Recipe 3" />
            <button onClick={() => openCookingMode('Gyudon')}> cooking mode </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
  <Accordion.Header>Grilled Salmon with Lemon-Dill Sauce</Accordion.Header>
  <Accordion.Body>
    <div align="left">
      Description:<br />
      This grilled salmon recipe is a quick-cooking and healthy dinner that's perfect for warmer weather.
      The lemon-dill sauce is the perfect finishing touch.<br />
      Procedure:<br />
      1. Preheat grill to medium-high heat.<br />
      2. Season salmon fillets with salt and pepper.<br />
      3. In a small bowl, mix together lemon juice, olive oil, garlic, dill, and honey. Brush mixture over salmon fillets.<br />
      4. Grill salmon for 4-5 minutes per side, or until fish flakes easily with a fork.<br />
      Ingredients:<br />
      4 salmon fillets<br />
      Salt and pepper to taste<br />
      ¼ cup lemon juice<br />
      2 tablespoons olive oil<br />
      2 cloves garlic, minced<br />
      2 tablespoons fresh dill, chopped<br />
      1 tablespoon honey<br />
      <img src="4.jpeg" width="300px" height="200px" alt="Recipe 4" />
      <button onClick={() => openCookingMode('Grilled Salmon')}> cooking mode </button>
    </div>
  </Accordion.Body>
</Accordion.Item>
       <Accordion.Item eventKey="4">
        <Accordion.Header>Chocolate Chip Cookies</Accordion.Header>
        <Accordion.Body>
          <div align="left">
            <h2>Description:</h2>
              <li>A classic and beloved sweet treat known for its chewy or crispy texture.</li>
            <h2>Procedure:</h2>
            <ol>
              <li>Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper.</li>
              <li>In a large bowl, beat the softened butter, granulated sugar, brown sugar, and vanilla extract until creamy. Add the eggs, one at a time, beating well after each addition.</li>
              <li>In another bowl, whisk together the flour, baking soda, and salt. Gradually beat the dry ingredients into the butter mixture.</li>
              <li>Stir in the chocolate chips by hand.</li>
              <li>Drop rounded tablespoons of dough onto the prepared baking sheets. Bake for 9 to 11 minutes or until golden brown.</li>
            </ol>
            <h2>Ingredients:</h2>
            <ul>
              <li>1 cup unsalted butter, softened</li>
              <li>3/4 cup granulated sugar</li>
              <li>3/4 cup packed brown sugar</li>
              <li>1 teaspoon vanilla extract</li>
              <li>2 large eggs</li>
              <li>2 1/4 cups all-purpose flour</li>
              <li>1 teaspoon baking soda</li>
              <li>2 cups semisweet chocolate chips</li>
            </ul>
            <img src="cookie.png" style={{width: "300px", height: "200px"}} alt="Chocolate Chip Cookies" />
            <button onClick={() => openCookingMode('Chocolate Chip Cookies')}> cooking mode </button>
          </div>
        </Accordion.Body>
     </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Lemon Drizzle Cake</Accordion.Header>
        <Accordion.Body>
          <div align="left">
            <h2>Description:</h2>
              <li>A popular choice for tea time, dessert, or special occasions. </li>
            <h2>Procedure:</h2>
            <ol>
              <li>Preheat your oven to 180°C (350°F). Grease and line a loaf tin with parchment paper or a loaf liner.</li>
              <li>In a large bowl, beat together the softened butter and sugar until creamy. Gradually add the eggs, beating well after each addition.</li>
              <li>Sift in the remaining flour and baking powder, folding gently into the mixture until well combined.</li>
              <li>Stir in the lemon zest and lemon juice.</li>
              <li>Pour the batter into the prepared tin and bake for 45 minutes or until a skewer inserted into the center comes out clean.</li>
            </ol>
            <h2>Ingredients:</h2>
            <ul>
              <li>225g unsalted butter, softened</li>
              <li>225g caster sugar</li>
              <li>4 large eggs</li>
              <li>225g self-raising flour</li>
              <li>1 teaspoon baking powder</li>
            </ul>
            <img src="lemon_drizzle_cake.png" style={{width: "300px", height: "200px"}} alt="Lemon Drizzle Cake" />
            <br /><button onClick={() => openCookingMode('Lemon Drizzle Cake')}> cooking mode </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
<Accordion.Item eventKey="6">
        <Accordion.Header>Cheesecake</Accordion.Header>
        <Accordion.Body>
        <div align="left">
          Description:<br />
              The filling for this delicious, easy cheesecake recipe has just eight
              simple ingredients, and the cake bakes in a mere 30 minutes.<br />
          <br />
          Ingredients:<br />
              (Crust)<br />
              1/2 cups (150g) graham cracker crumbs (about 10 whole crackers, crushed)<br />
              1/4 cup (28g) confectioners' sugar<br />
              6 tablespoons (85g) butter, melted <br />
              1/8 teaspoon table salt<br />
              (Filling)<br />
              two 8-ounce packages (452g) cream cheese, at room temperature<br />
              2/3 cup (133g) granulated sugar<br />
              2 large eggs, at room temperature<br />
              1 teaspoon vanilla extract<br />
          <br />
          Instructions:<br />
              1. Preheat the oven to 350°F.<br />
              2. To make the crust: Stir together all of the crust ingredients, 
              mixing until thoroughly combined.<br />
              3. Press the crumbs into the bottom and up the sides of your pie pan<br />
              4. To make the filling: Mix together the room-temperature cream cheese and 
              sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth.<br />
              5. Set the pie pan onto a baking sheet, if desired; this protects the bottom of 
              the crust from any potential scorching. Pour the filling into the crust.<br />
              6. To bake the cheesecake: Place the cheesecake in the oven. 
              Bake it for 30 minutes.<br />
              7. Once the cake is cool, refrigerate it, covered, 
              until you're ready to serve it.<br />
          <img src="cheesecake.jpg" width="300px" height="200px" alt=""></img>
          <button onClick={() => openCookingMode('Cheesecake')}> cooking mode </button>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;