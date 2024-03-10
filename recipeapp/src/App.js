// App.js
import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CookingMode from './Cookingmode';
import { Button } from 'react-bootstrap';

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
  /*const addRp =()=>{
    let jsonObject;  
    try {  
       jsonObject = JSON.parse(newrp);  
    } catch (error) {  
      console.error('Error parsing JSON:', error);  
      jsonObject = null; // or set to other default values 或者设置为其他默认值  
    }  
    if (jsonObject!== null){
       alert(jsonObject);
      //setData([...data,jsonObject]);
    }
    //addItem(newrp);
    //addRpItem(newrp);
}*/  

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
                <img src={recipe.imageUrl} alt={recipe.name} style={{ maxWidth: '300px', maxHeight: '200px' }} />
                <button onClick={() => openCookingMode(recipe)}>Open Cooking Mode</button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div>
        <br />
        <p><strong>Would you like to add new recipe?&nbsp;&nbsp;&nbsp;</strong><Button onClick={addnewrp}>add new recipe</Button>
        <br /></p>
        <textarea value={newrp} rows={4} cols={150} onChange={handleTextChange}></textarea><br />
        <br />            
      </div>
      {selectedRecipe && <CookingMode recipe={selectedRecipe} onClose={closeCookingMode} />}
      </div>
  );
}

export default App;