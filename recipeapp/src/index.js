import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing_page from './Landing_page';
import Groceryoffcanvas from './Groceryoffcanvas';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
var idxcount = 0;
var initglist = [
 /* {id:1, g:'500 grams chicken thighs',checked: false},
  {id:2, g:'1 tablespoon salt',checked: false},
  {id:3, g:'teaspoon ground white pepper',checked: false},
  {id:4, g:'1 tablespoon cooking oil',checked: false},
  {id:5, g:'1 cup plain flour',checked: false},
  {id:6, g:'1 tablespoon water',checked: false}*/
];

/*const MyContext = React.createContext();
<MyContext.Provider value={{glist}}>
</MyContext.Provider>
{MyContext.glist=initglist};*/

//const handleCheck = (event) => {
const getGlist = (data) => {
  idxcount= idxcount+1;
  //glista=(current =>[...current,{id:idxcount,g:event.target.value,checked:false}]);
  //initglist=(current =>[...current,{id:idxcount,g:data,checked:false}]);
  //alert(data);
  var new1={id:idxcount,g:data,checked:false};
  //alert(new1);
  initglist.push(new1);
  //alert(initglist);
};


root.render(
  <React.StrictMode>
    <Landing_page glist={initglist} rtnGlist={getGlist}/>
    
  </React.StrictMode>
);

//<Groceryoffcanvas glist={initglist}/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
