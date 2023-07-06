// ESM syntax is supported.
export {};
import fs from "fs";
import { formularAbsenden } from "./functions.js";

// Group Project registration and login functionality

// Erstellen einer login und registrier Webpage

// Arbeitsteilung:

// Team Member 1: Backend Development

// Set up the project structure: Create the directory structure for the project and initialize a new Node.js project using npm. DONE
// Design the data structure: Define the structure of the user data, including username, password, and additional profile information, using JavaScript objects and arrays.
// Implement user registration functionality:
// Create server-side routes to handle user registration requests.
// Validate the input for requirements like username uniqueness, password complexity, etc.
// Store the user details securely in a JSON file
// Create server-side routes to handle user login requests.
// Verify the entered credentials against the stored user data.
// Generate a session token or identifier and send it as a response upon successful login.
// Implement user profile management functionality:
// Create server-side routes to handle profile retrieval and update requests.
// Retrieve and update the user's profile information in the JSON file or the database.
// Handle error cases:
// Implement proper error handling for scenarios like invalid inputs, duplicate usernames during registration, incorrect login credentials, etc.
// Test the backend functionality:
// Write unit tests to verify the registration, login, and profile management functionalities.
// Test different scenarios and edge cases to ensure the proper functioning of the backend code.

// Design the data structure: Define the structure of the user data, including username, password, and additional profile information, using JavaScript objects and arrays.

class userData {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

function storeUserData(userData) {
  // Read the existing data from the JSON file (if any)
  let existingData = [];
  try {
    const jsonData = fs.readFileSync("userdata.json", "utf-8");
    existingData = JSON.parse(jsonData);
  } catch (error) {
    // Handle the case where the file doesn't exist yet or cannot be read
    console.error("Error reading userdata.json:", error);
  }

  // Check for duplicate registrations
  const isDuplicate = existingData.some(
    (user) =>
      user.username === userData.username || user.email === userData.email
  );
  if (isDuplicate) {
    console.error("User with the same username or email already exists.");
    return;
  }

  // Add the new user data to the existing data
  existingData.push(userData);

  // Convert the updated data to JSON string
  const updatedData = JSON.stringify(existingData, null, 2);

  // Write the updated data back to the JSON file
  fs.writeFile("userdata.json", updatedData, "utf-8", (error) => {
    if (error) {
      // Handle the case where the file cannot be written
      console.error("Error writing userdata.json:", error);
    } else {
      console.log("User data stored successfully.");
    }
  });
}
const user1 = new userData("John", "password123", "john@example.com");
const user2 = new userData("Jane", "password456", "jane@example.com");
// Add more instances as needed

storeUserData(user1, user2);
// Call the function for additional instances
