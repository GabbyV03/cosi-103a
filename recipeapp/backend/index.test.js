const request = require('supertest');
const app = require('./index'); // Assuming your Express app is exported from index.js

describe('Backend API', () => {
  // Test case for GET /api/recipes
  test('GET /api/recipes should return all recipes', async () => {
    const response = await request(app).get('/api/recipes');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Test case for POST /api/recipes
  test('POST /api/recipes should add a new recipe', async () => {
    const newRecipe = {
      name: 'Test Recipe',
      ingredients: ['ingredient1', 'ingredient2'],
      steps: ['step1', 'step2'],
    };

    const response = await request(app)
      .post('/api/recipes')
      .send(newRecipe);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('recipe_id');
    expect(response.body.name).toBe(newRecipe.name);
    expect(response.body.ingredients).toEqual(newRecipe.ingredients);
    expect(response.body.steps).toEqual(newRecipe.steps);
  });

  // Test case for GET /api/ingredients/search
  test('GET /api/ingredients/search should return ingredient details', async () => {
    const response = await request(app).get('/api/ingredients/search?q=apple');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('url');
  });

  // Add more test cases for other routes and scenarios
});