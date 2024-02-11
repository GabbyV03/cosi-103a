import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Groceryoffcanvas() {
  const [show, setShow] = useState(false);
  const [groceryList, setGroceryList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addItemToList = () => {
    if (newItem.trim() !== '') {
      setGroceryList([...groceryList, newItem]);
      setNewItem('');
    }
  };

  const removeItemFromList = (index) => {
    const newList = [...groceryList];
    newList.splice(index, 1);
    setGroceryList(newList);
  };

  const clearList = () => {
    setGroceryList([]);
  };

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
          <div>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter item..."
            />
            <button onClick={addItemToList}>Add Item</button>
          </div>
          <ul>
            {groceryList.map((item, index) => (
              <li key={index}>
                {item}{' '}
                <button onClick={() => removeItemFromList(index)}>Remove</button>
              </li>
            ))}
          </ul>
          {groceryList.length === 0 && <p>Your grocery list is empty.</p>}
          <Button variant="danger" onClick={clearList}>Clear List</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Groceryoffcanvas;