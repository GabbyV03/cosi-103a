import './App.css';//who in charge of style should create a css for landing page and replace this
import App from './App';
import Team from './Team';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  createBrowserRouter,
  RouterProvider,
  Root,
  Link,
} from "react-router-dom";

// The search button is not implemented and commented out for simplicity.
// In the NavBar, the button with dropdown and the disabled button
// are also not implemented and kept in the comments for reference.

function RecipeSummary({ title, image }) {
  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}


function Landing_page() {
  const recipes = [
    {
      title: "Salty Crispy Chicken",
      image: "1.jpeg"
    },
    {
      title: "Mushroom soup",
      image: "2.jpeg"
    },
    {
      title: "Gyudon (Japanese Beef Bowl)",
      image: "3.jpeg"
    },
    {
      title: "Grilled Salmon with Lemon-Dill Sauce",
      image: "4.jpeg"
    },
    {
      title: "Chocolate Chip Cookies",
      image: "cookie.png"
    },
    {
      title: "Lemon Drizzle Cake",
      image: "lemon_drizzle_cake.png"
    },
    {
      title: "Cheesecake",
      image: "cheesecake.jpg"
    }
  ];
  return (
    <div className="Landing_page">
      <Navigater />
      <h2>Welcome!</h2>
      <p>Here are some of our best recipes</p>
      <Container fluid>
        <div className="recipe-summary">
          {recipes.map((recipe, index) => (
            <RecipeSummary
              key={index}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </div>
      </Container>
      <p>Click the link below to find out more!</p>
      <RouterProvider router={router}/>
    </div>
  );
}

const router = createBrowserRouter([
  {
   path: "/",
   element: (
     <div>
       <li><Link to="Recipe">Recipe</Link></li>
       <li><Link to="Team">Team</Link></li>
     </div>
   ),
 },
 {
   path: "/",
   children: [
     {
       path: "Recipe",
       element: <App />,
     },
    {
       path: "Team",
       element: <Team />,
    },
   ],
 },

 {
   path: "/",
   children: [
     {
       path: "Recipe",
       element: <App />,
     },
    {
       path: "Team",
       element: <Team />,
    },
   ],
 },
]);

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
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action4">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                {/* <Nav.Link href="#" disabled>
                  Link
                </Nav.Link> */}
              </Nav>

              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      );
  }

export default Landing_page;