import React from 'react';
import { Carousel } from 'react-bootstrap';

function CookingMode({ recipe }) {
    // Array of objects containing instructions for each recipe
    const recipeInstructions = [
        {
            name: "Salty Crispy Chicken",
            instructions: [
                "Step 1: Cut chicken into pieces. Mix seasonings with chicken. Marinate for at least an hour.",
                "Step 2: Combine ingredients for batter. Set aside.",
                // Add more steps as needed
            ]
        },
        // Add other recipes in same format
    ];

    // Find the instructions for the selected recipe
    const selectedRecipe = recipeInstructions.find(item => item.name === recipe);

    return (
        <div>
            <h2>Cooking Mode - {recipe}</h2>
            <Carousel>
                {selectedRecipe && selectedRecipe.instructions.map((instruction, index) => (
                    <Carousel.Item key={index}>
                        <p>{instruction}</p>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CookingMode;