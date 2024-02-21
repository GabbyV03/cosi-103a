import React from 'react';
import { Carousel } from 'react-bootstrap';
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
        <Carousel showArrows={true} showThumbs={false} controls={true} interval={null}>
          {recipe.instructions.map((instruction, index) => (
            <Carousel.Item key={index}>
              <div>{recipe.steps[index]}</div>
              <br></br>
              <div><h3>{instruction}</h3></div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CookingMode;