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

  
  const searchIngredients = async () => {
    if (cache[query]) {
      setResult(cache[query]);
      setError('');
      return;
    }

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
  const throttledSearch = throttle(searchIngredients, 1000); 

  return (
    <div className="ingredient-search">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for ingredients"
        />
        <Button onClick={throttledSearch} variant="primary">Search</Button>
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
