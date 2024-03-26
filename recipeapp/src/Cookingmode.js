import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Cookingmode.css';

const CustomPrevIcon = () => <span className="carousel-control-prev-arrow">❮</span>;
const CustomNextIcon = () => <span className="carousel-control-next-arrow">❯</span>;

//displays the cooking mode interface
function CookingMode({ recipe, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleCloseCookingMode = () => {
    onClose();
  };

  const handleSelect = (selectedIndex, e) => {
    setCurrentStep(selectedIndex);
  };

  return (
    <div className="modal-background">
      <div className='cooking-mode-container'>
        <h2>{recipe.title}</h2>
        <button onClick={handleCloseCookingMode}>Close Cooking Mode</button>
        <progress className="progress-bar" value={currentStep + 1} max={recipe.steps.length}></progress>
        <Carousel activeIndex={currentStep} onSelect={handleSelect} prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />}>
          {recipe.steps.map((instruction, index) => (
            <Carousel.Item key={index}>
              <div><h3 className="instruction-style">{instruction}</h3></div>
            </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CookingMode;
