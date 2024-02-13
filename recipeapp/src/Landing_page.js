import './landingpage.css';
import Accordion from 'react-bootstrap/Accordion';
import App from './App';
import Team from './Team';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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

// The search button is not implemented and commented out for simplicity.
// In the NavBar, the button with dropdown and the disabled button
// are also not implemented and kept in the comments for reference.

var iglist;
var rtn;

function Landing_page(props) {
iglist=props.glist;
rtn=props.rtnGlist;
const [tp, setTp] = useState(0);

const handleAddnew=(str)=>{
  props.rtnGlist(str);
  setTp(tp+1);
  //setGglists(current=>[...props.glist]);
}

const router = createBrowserRouter([
  {
   path: "/",
   element: (
     <div>
        <Header />
        <BasicExamples />
     </div>
   ),
 },
 {
   path: "/",
   children: [
     {
       path: "Recipe",
       element: <App glist={iglist} rtnGlist={handleAddnew}/>,
     },
    {
       path: "Team",
       element: <Team />,
    },
   ],
 },
]);

//alert(rtn);
  return (
    <div className="Landing_page">
      <Navigater />
      <RouterProvider router={router}/>
      <Groceryoffcanvas tp={tp} glist={iglist}/>
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



function Header() {
  return (
    <header className="header">
      <h1>Welcome to the COSI-103A Group T project page!</h1>
      <p>We are a team of students enrolled in Software Engineering at Brandeis University. This innovative course provides hands-on experience with the entire software development lifecycle.</p>
    </header>
  );
}
