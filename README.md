# Spring 2024 COSI-103A Group T RecipeApp

## Description

RecipeApp is a web application that allows users to browse through a variety of recipes. Each recipe includes a list of ingredients and step-by-step instructions. You can also add new recipes, or enter ingredients into your grocery list.

## Getting Started with our Recipe App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). We used primarily JavaScript and CSS for this project but we are currently working on including Docker Microsoft Azure

## Available Scripts

In the project directory, you can run:

### `cd recipeapp`

Navigate into the project directory.

### `npm install`

Install the dependencies.

### `npm start`

Start the application on the production server.

### `npm test`

Launches the test runner if needed

### Usage
After starting the application, you can browse through the recipes, pages, and utilize the features including a grocery list, a "Cooking Mode", a nutritional information search bar, and a form to add new recipes.

## Pages & Features

When you load the app, you will can navigate to several pages using the navigation bar:

- **Landing Page**: This page displays a summary of our recipes. You can click on the "View Recipe" button to take you to the full recipe page. In the search bar at the bottom, you can search for an ingredient's nutritional information from the FDC!

- **Recipe Page**: This page displays the full recipes. Each recipe includes a list of ingredients and step-by-step instructions as well as a helpful image!

- **Team Page**: This page introduces our team members. Each member's profile includes a photo and our name.

- **Grocery List**: It is displayed somewhere on each screen and allows the user to add ingredients to the grocery list, delete individual items or clear the entire list.

- **Cooking Mode**: Each recipe has a link to the mobile-friendly "Cooking Mode" page, which displays the instructions in a kitchen-friendly way, shows only the recipe's instructions, and the instructions take up the entire screen in a large font.

- **Add New Recipes**: On the recipe page, you can find a text box for you to enter a recipe in JSON format. <br/> For example, if you enter {"name": "Your Recipe Name", "ingredients": ["Ingredient1", "Ingredient2"], "steps": ["Step1", "Step2"], "imageUrl": "SourceOfYourImage.com/image.jpg"}, then your recipe titled "Your Recipe Name" will be visible across all users in the list of recipes!

## Azure Alerts

We are constantly working to monitor and maintain our app, below are some of the metrics we monitor for to give you the best experience!

- **CPU Usage**: alerts to make sure the app is not going over the expected CPU usage, which could mean something is wrong on our end.

- **Heartbeat**: alerts to ensure the app stays up and running, if the app goes down or experiences any hiccup, we will know.

- **Space Usage**: alerts to the amount of space the app is currently using, ensuring we don't exceed Microsoft's credit usage since the more space the app takes, the more resources it uses to keep running

## About us

Qiping Zhang: qipingzhang@brandeis.edu

Athena Bai: athenabai@brandeis.edu

Gabriella Vukomanovic: gvukomanovic@brandeis.edu

Yao Sun: yaosun@brandeis.edu

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


