# GitHub Workflow Documentation

## Workflow 1: workflows/deploy-container-app.yml: Run Azure Login with OIDC
This workflow is triggered automatically when a pull request is made to the main branch. The workflow will log into Azure, deploy the infrastructure, and build and deploy the container app.
Secrets is stored securely in our GitHub repository settings.

## Workflow Steps
1. **Step 1**: Checkout Repository
2. **Step 2**: Azure Login
3. **Step 3**: Run Azure CLI Commands
4. **Step 4**: Build and Deploy Container App

## Workflow 2: workflows/github-actions-demo.yml: 
Note: This workflow is a basic example and not have any direct relation to the recipe application. It serves as a starting point to learn and understand the basics of GitHub Actions.

## Workflow 3: workflows/runtest.yml: Run Tests
This workflow runs tests for the recipe application whenever a pull request is made to the repository.
The test script is defined in the package.json file in the recipeapp directory.

If the tests pass successfully, in the GitHub Actions workflow run's logs, the workflow will complete with a green checkmark. If any tests fail, the workflow will fail, and the logs will provide details about the failed tests.

## Workflow Steps
1. **Step 1**: Checkout Repository
2. **Step 2**: List Repository Contents
3. **Step 3**: Setup Node.js
4. **Step 4**: Install Dependencies
5. **Step 5**: Run Tests