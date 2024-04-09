# Developer Documentation

## Running production and development server

To run production server on port 8000, run 'npm run start' in the terminal
To run development server on port 3000 (allows hot-reloading on client-side code, have to restart the server using the command above if changes were made to backend), run 'npm run start-client' in the terminal

## How to use secrets during development

In order to use/call the external api key when developing, use 'process.env.NUTRITION_API_KEY'

## Important for Database Integration

Database Endpoint url: https://recipeapp-groupt.documents.azure.com:443/
databaseName = 103a-recipeapp
containerName = recipeapp-container

##If Developing in Codespaces 

You have to run:
sudo su root
curl -L https://aka.ms/InstallAzureCli | sudo bash
in order to install Azure CLI and make sure to restart the shell

once done installing run:
az login --use-device-code and follow the instructions to authenticate

# Smoke Tests (smoke.test.js)

This file contains smoke tests for the application. This a quick first check to catch any major issues.

## Test: 'renders app without crashing' and 'renders Team Page'
This is a basic smoke test to ensure that the main `App` component and `TeamPage` component renders without throwing any errors. 


## Test: 'adds a new recipe into the list' and 'delete a new recipe'
This test simulates the process of adding and deleting a recipe. 

