// Import necessary libraries for HTTP requests
const axios = require('axios');
// Get FQDN from environment variable
const fqdn = process.env.LATEST_REVISION_FQDN;

console.log("FQDN:", fqdn);


// Define the URL to test
const url = `https://${fqdn}/`;

console.log("URL:", url);

// Function to perform smoke tests
async function runSmokeTests() {
    try {
        // Make an HTTP GET request to the URL
        const response = await axios.get(url);

        // Check if the response status is OK (200)
        if (response.status === 200) {
            console.log("Smoke tests passed. Application is up and running.");
            process.exit(0); // Exit with success status code
        } else {
            console.error("Smoke tests failed. Unexpected response status:", response.status);
            process.exit(1); // Exit with error status code
        }
    } catch (error) {
        console.error("Smoke tests failed. Error:", error.message);
        process.exit(1); // Exit with error status code
    }
}

// Run smoke tests
runSmokeTests();