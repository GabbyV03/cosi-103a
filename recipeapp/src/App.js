// App.js
import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CookingMode from './Cookingmode';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editRecipe, setEditRecipe] = useState(null);
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
  };

  // Function to handle saving the edited recipe
  const handleSaveRecipe = () => {
    const updatedRecipe = JSON.parse(editRecipe);
    fetch(`/api/recipes/${updatedRecipe.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe.id === data.id ? data : recipe
          )
        );
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error('Error updating recipe:', error);
      });
  };

  // Function to handle deleting a recipe
  const handleDeleteRecipe = (recipeId) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      fetch(`/api/recipes/${recipeId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setRecipes((prevRecipes) =>
              prevRecipes.filter((recipe) => recipe.id !== recipeId)
            );
          } else {
            throw new Error('Failed to delete recipe');
          }
        })
        .catch((error) => {
          console.error('Error deleting recipe:', error);
        });
    }
  };



  // Enable the user to add new recipes
  const  [newrp,setNewrp] = useState("");
  const handleTextChange = (event) => {  
    setNewrp(event.target.value);  
  }; 
  const addnewrp=()=>{
    //alert(newrp);
    console.log(newrp);
    let jsonObject;
    //alert(jsonObject);
    try {  
      jsonObject = JSON.parse(newrp);  
      //alert(newrp);
      //alert(jsonObject);
        } catch (error) {  
      console.error('Error parsing JSON:', error);  
      jsonObject = null;  
    }  
    if (jsonObject!== null){
        //alert(jsonObject);
        
        const { name, ingredients, steps ,imageUrl } = jsonObject;
        const newRecipe = {
          id: recipes.length + 1,
          name,
          ingredients,
          steps,
          imageUrl
    
          };
          //recipes.push(newRecipe);
        setRecipes([...recipes,newRecipe]);
        fetch('/api/recipes', {  
          method: 'POST',  
          headers: {  
            'Content-Type': 'application/json',  
          },  
          body: newrp, 
        })  
        //.then(response => response.json())  
        //.then(data => console.log(data))  
        .catch((error) => {  
          console.error('Error:', error);  
        })
        console.log('send ok');
        //alert(JSON.stringify(recipes,null,2));
   } 
    
        
  }

  // Display recipe page
  // Display recipe page
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
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                style={{ maxWidth: '300px', maxHeight: '200px' }}
              />
              <button onClick={() => openCookingMode(recipe)}>
                Open Cooking Mode
              </button>
              <button onClick={() => handleEditRecipe(recipe)}>Edit</button>
              <button onClick={() => handleDeleteRecipe(recipe.id)}>
                Delete
              </button>
            </div>
          </Accordion.Body>
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

    <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          value={editRecipe ? JSON.stringify(editRecipe, null, 2) : ''}
          rows={10}
          cols={50}
          onChange={(e) => setEditRecipe(e.target.value)}
        ></textarea>
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