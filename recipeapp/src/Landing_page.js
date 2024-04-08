import './landingpage.css';
import App from './App';
import Team from './Team';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Groceryoffcanvas from './Groceryoffcanvas';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Root,
  Link,
} from "react-router-dom";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { throttle } from 'lodash';


function Landing_page(props) {

// Create a browser router with defined routes
const router = createBrowserRouter([
  {
   path: "/",
   element: (
     <div>
        <Header />
        <BasicExamples />
        <IngredientSearch /> 
     </div>
   ),
 },
 {
   path: "/",
   children: [
     {
       path: "Recipe",
       element: <App/>,
     },
    {
       path: "Team",
       element: <Team />,
    },
   ],
 },
]);

  return (
    <div className="Landing_page">
      <Navigater />
      <RouterProvider router={router}/>
      <Groceryoffcanvas/>
    </div>
  );
}

// Render a card with a recipe summary and a link to the recipe page
function BasicExamples() {
  return (
    <div className="recipe-list">
      <Card className="recipe-summary">
        <Card.Img variant="top" src="FoodCollage.png" alt="Food Collage" />
        <Card.Body>
          <Card.Title>Salty Crispy Chicken, Gyudon, Cheesecake, and more!</Card.Title>
          <Card.Text>
            Click the link below to view the recipes for these delicious dishes! 
          </Card.Text>
          <Link to="/Recipe">
            <Button variant="primary">View Recipe</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

// Render the navigation bar with links to different pages
function Navigater() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">Group T</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="Recipe">Recipe</Nav.Link>
                <Nav.Link href="Team">Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      );
  }


// Render the header section with a welcome message
function Header() {
  return (
    <header className="header">
      <h1>Welcome to the COSI-103A Group T project page!</h1>
      <p>We are a team of students enrolled in Software Engineering at Brandeis University. This innovative course provides hands-on experience with the entire software development lifecycle.</p>
    </header>
  );
}

function IngredientSearch() {
  const [query, setQuery] = useState(''); // State for the search query
  const [result, setResult] = useState(null); // State for the search result URL
  const [error, setError] = useState(''); // State for any error message
  const [cache, setCache] = useState({});

  // Check if the result is already cached
  const searchIngredients = async () => {
    if (cache[query]) {
      setResult(cache[query]);
      setError('');
      return;
    }
    // Perform the ingredient search API call
    const url = `/api/ingredients/search?q=${encodeURIComponent(query)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again after an hour.');
        } else {
          throw new Error('Server responded with an error');
        }
      }
      const data = await response.json();
      setResult(data.url); // Extract the URL from the JSON response
      setError('');
      setCache(prevCache => ({ ...prevCache, [query]: data.url }));
    } catch (error) {
      console.error('Error fetching ingredient data:', error);
      console.error('Error details:', error.message);
      setError('Error searching ingredient');
      setResult(null);
    }
  };
  // Throttle the search function to limit the rate of API calls
  const throttledSearch = throttle(searchIngredients, 1000); 


  // Style of the search bar
  return (
    <div className="ingredient-search">
    <br/>
    <br/>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className="highlighted" 
          type="text"
          size="40"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for ingredients"
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={throttledSearch} variant="outline-info">Search</Button>
      </div>
  
      {result && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={result} target="_blank" rel="noopener noreferrer">View Nutrient Details</a>
          </div>
        )}
      {error && (
        <div style={{ display: 'flex', justifyContent: 'center' }} className="search-error">{error}</div>
      )}
    </div>
  );
      }

export default Landing_page;
