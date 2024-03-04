// App.js
import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CookingMode from './Cookingmode';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipes data from the API
    fetch('/api/recipes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data); // Set the fetched recipes data to the state
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle opening cooking mode
  const openCookingMode = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle closing cooking mode
  const closeCookingMode = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <h1>Best Recipes</h1>
      <Accordion>
        {recipes.map((recipe, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{recipe.name}</Accordion.Header>
            <Accordion.Body>
              <div align="left">
                <h2>Ingredients:</h2>
                <ul>
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
                <h2>Steps:</h2>
                <ol>
                  {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
                <img src={recipe.imageUrl} alt={recipe.name} style={{ maxWidth: '300px', maxHeight: '200px' }} />
                <button onClick={() => openCookingMode(recipe)}>Open Cooking Mode</button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      {selectedRecipe && <CookingMode recipe={selectedRecipe} onClose={closeCookingMode} />}
    </div>
  );
}

export default App;