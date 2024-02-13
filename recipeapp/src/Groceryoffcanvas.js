import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

//import React from 'react';
//import FormGroup from 'react-bootstrap/FormGroup';


function Groceryoffcanvas(props){
  const [show, setShow] = useState(false);
  const [groceryList, setGroceryList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Grocery List
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default Groceryoffcanvas;