import './App.css';//who in charge of style should create a css for landing page and replace this
import App from './App';
import Team from './Team';
import Button from 'react-bootstrap/Button';
import React from 'react';
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



function Landing_page() {
  return (
    <div className="Landing_page">
      <Navigater />
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