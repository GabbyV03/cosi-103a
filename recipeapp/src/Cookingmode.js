import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Cookingmode.css';

function CookingMode({ recipe, onClose }) {

  const handleCloseCookingMode = () => {
    onClose();
  };

  return (
    <div>
      <div className="modal-background"></div>
      <div className='cooking-mode-container'>
        <h2>{recipe.title}</h2>
        <button onClick={handleCloseCookingMode}>Close Cooking Mode</button>
        <Carousel>
          {recipe.instructions.map((instruction, index) => (
            <div key={index}>
            {instruction}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CookingMode;