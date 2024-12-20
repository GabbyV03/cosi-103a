// App.js
import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CookingMode from './Cookingmode';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editRecipe, setEditRecipe] = useState(null);
  const [editRecipeJson, setEditRecipeJson] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

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

  // Function to handle editing a recipe
  const handleEditRecipe = (recipe) => {
    setEditRecipe(recipe);
    setShowEditModal(true);
    setEditRecipeJson(JSON.stringify(recipe, null, 2)); // Populate the textarea with the JSON string of the recipe
  };

  // Function to handle editing the recipe JSON string
  const handleEditRecipeJsonChange = (e) => {
    setEditRecipeJson(e.target.value);
  };

  // Function to handle saving the edited recipe
  const handleSaveRecipe = () => {
    let updatedRecipe;
    try {
      updatedRecipe = JSON.parse(editRecipeJson);
    } catch (error) {
      alert("Invalid JSON format. Please ensure the input is a valid JSON string.");
      return;
    }

    // Validate the updated recipe
    if (!updatedRecipe.hasOwnProperty('name') || !updatedRecipe.hasOwnProperty('recipe_id') || !updatedRecipe.hasOwnProperty('steps') || !updatedRecipe.hasOwnProperty('ingredients') || !updatedRecipe.hasOwnProperty('imageUrl') || !updatedRecipe.hasOwnProperty('id') || !updatedRecipe.hasOwnProperty('_rid') || !updatedRecipe.hasOwnProperty('_etag') || !updatedRecipe.hasOwnProperty('_ts') || !updatedRecipe.hasOwnProperty('_self') || !updatedRecipe.hasOwnProperty('_attachments')) {
      alert("Incomplete recipe data. Please provide all required fields.");
      return;
    }

    // Update the recipe state with the edited recipe
    setRecipes(prevRecipes => prevRecipes.map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)));
    setShowEditModal(false);
  };

  // Function to handle deleting a recipe
  const handleDeleteRecipe = async (recipe_id, id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        const deleteResponse = await fetch(`/api/recipes/${recipe_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: id }) // Include the id in the request body
        });
        if (deleteResponse.ok) {
          setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.recipe_id !== recipe_id));
        } else {
          console.error('Failed to delete recipe');
        }
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  };

  // Function to handle keydown event
  const handleKeyDown = (event) => {
    if (event.key === 'Delete' || event.key === 'Backspace') {
      const newValue = event.target.value;
      if (newValue.length === 0) {
        event.preventDefault();
        return;
      }
    }
  };

  // Enable the user to add new recipes
  const [newrp, setNewrp] = useState("");

  const handleTextChange = (event) => {
    setNewrp(event.target.value);
  };

  const addnewrp = () => {
    let jsonObject;
    try {
      jsonObject = JSON.parse(newrp);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      jsonObject = null;
    }
    if (jsonObject !== null) {
      const { name, ingredients, steps, imageUrl } = jsonObject;
      const newRecipe = {
        id: recipes.length + 1,
        name,
        ingredients,
        steps,
        imageUrl
      };
      setRecipes([...recipes, newRecipe]);
      fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }
  };

  // Display recipe page
  return (
    <div className="App">
      <h1>Best Recipes</h1>
      <Accordion>
        {recipes.map((recipe, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              {recipe.name}
            </Accordion.Header>
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
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  style={{ maxWidth: '300px', maxHeight: '200px' }}
                />
                <button onClick={() => openCookingMode(recipe)}>
                  Open Cooking Mode
                </button>
              </div>
            </Accordion.Body>
            <div className="d-flex justify-content-end m-2">
              <Button variant="secondary" onClick={() => handleEditRecipe(recipe)} className="me-2">
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDeleteRecipe(recipe.recipe_id, recipe.id)}>
                Delete
              </Button>
            </div>
          </Accordion.Item>
        ))}
      </Accordion>
      <div>
        <br />
        <p>
          <strong>Would you like to add a new recipe?&nbsp;&nbsp;&nbsp;</strong>
          <Button onClick={addnewrp}>Add New Recipe</Button>
          <br />
        </p>
        <textarea
          value={newrp}
          rows={4}
          cols={150}
          onChange={handleTextChange}
        ></textarea>
        <br />
        <br />
      </div>

      {selectedRecipe && (
        <CookingMode recipe={selectedRecipe} onClose={closeCookingMode} />
      )}

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: 'center' }}>
            <textarea
              onKeyDown={handleKeyDown}
              value={editRecipeJson}
              rows={10}
              cols={60}
              onChange={handleEditRecipeJsonChange}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveRecipe}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;