import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

//import React from 'react';
//import FormGroup from 'react-bootstrap/FormGroup';


function Groceryoffcanvas(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

/*  const initglist = [
    {id:1, g:'one egg',checked: false},
    {id:2, g:'two pple',checked: false},
    {id:3, g:'two tomatoes',checked: false}
  ] */

  //const initglist = useContext(MyContext).glist;
  let initglist = props.glist;
  let idxcount ={initglist}.length;
  const[gglists,setGglists] = useState(initglist);
  const[newg,setNewg] = useState('new Grocery');
  //const [tp, setTp] = useState(0);

  useEffect (()=>{
  //alert("new"+props.glist.length+"g");
    initglist =[...props.glist];
    setGglists(initglist);
  },[props.tp]);
  //});


  const handleAdd =() =>{
    idxcount= idxcount+1;
    setGglists(current =>[...current,{id:idxcount,g:newg,checked:false}]);
  }

  function handleCheck(idx){
    const newgl = gglists.map((element,index)=>{
        if (index=== idx){
            element.checked = !element.checked;
            //setNewg(element.g);
        }
        return element;
    });
    
    setGglists(newgl);
    
    
  }

  function handleDel(){
    setGglists(current=>
        current.filter(gglists=>{
            return gglists.checked !== true;
        })
    );

  }

  function handleClear(){
    
    setGglists(current=>
        current.filter(gglists=>{
            return null;
        })
    );
    idxcount =0;

  }
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Grocery List
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement ='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {gglists.map((element, index) => {
           return (
              <div>
                
                <Form.Check  key={index} checked={element.checked} 
                     onClick={()=>{handleCheck(index);}} label={element.g}>
                </Form.Check>
                
                
              </div>
              
            );
          })}
        <Form.Control as='input' value={newg} onChange={e=>setNewg(e.target.value)}></Form.Control>
        <Button onClick={handleAdd}>+</Button>
        <Button onClick={handleDel}>-</Button>
        <Button onClick={handleClear}>CLEAR</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default Groceryoffcanvas;