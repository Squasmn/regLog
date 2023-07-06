// ESM syntax is supported.
export {};

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

// Implement user registration functionality:

class userData {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

let Halid = new userData("Halid", "1234", "Student");

console.log(Halid.username);

// Create server-side routes to handle user registration requests.

// Validate the input for requirements like username uniqueness, password complexity, etc.

// Store the user details securely in a JSON file



// ____________________________________________________________________________________________________________________________
//  Writing functions to save registered users to local storage and checking for existing registrations is an important part of your user registration functionality. Here's an outline of the tasks you can work on:

// 1. Save Registered Users to Local Storage:
//    - Create a function or method that takes an instance of the `userData` class as a parameter.
//    - Convert the user data into a JSON string using `JSON.stringify()`.
//    - Use the `localStorage` object to store the JSON string in the browser's local storage. You can use a unique key to identify the user data.

// 2. Check for Existing Registrations:
//    - Create a function or method that checks if a given username or email already exists in the local storage.
//    - Retrieve the user data from the local storage using the unique key you used for storage.
//    - Parse the JSON string back into an object using `JSON.parse()`.
//    - Compare the new registration's username and email with the existing user data to check for duplicates.
//    - Return a boolean value indicating whether a duplicate username or email was found.

// 3. Update the User Registration Function:
//    - Integrate the functions you wrote in step 1 and step 2 into your user registration function.
//    - Before saving the user data, check for duplicates by calling the function to check for existing registrations.
//    - If a duplicate username or email is found, handle the error appropriately (e.g., display an error message to the user).
//    - If no duplicates are found, save the registered user to local storage using the function you wrote in step 1.

// 4. Test the Functionality:
//    - Write tests to ensure that user data is saved correctly to local storage.
//    - Test the check for existing registrations function by providing different usernames and emails and verifying the results.
//    - Test the user registration function by simulating both successful registrations and registrations with duplicates.

// Remember to handle error cases gracefully and provide appropriate feedback to the user. Also, consider adding error handling for scenarios such as exceeding storage limits or potential data corruption in local storage.



funtion saveRegisteredUsers(userData) { 

  let userDataString = JSON.stringify(userData);
  localStorage.setItem("userData", userDataString);
}

function checkForExistingRegistrations(userData) {
  let userDataString = localStorage.getItem("userData");
  let userDataObject = JSON.parse(userDataString);

  if (userDataObject.username === userData.username || userDataObject.email === userData.email) {
    return true;
  } else {
    return false;
  }
}

function registerUser(userData) {
  if (checkForExistingRegistrations(userData)) {
    console.log("User already exists");
  } else {
    saveRegisteredUsers(userData);
  }
}

registerUser(Halid);


// ____________________________________________________________________________________________________________________________

