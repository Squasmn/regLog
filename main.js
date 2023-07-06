// ESM syntax is supported.
export {};
import fs from "fs";

// Group Project registration and login functionality

// Erstellen einer login und registrier Webpage

// 3. Implement user registration functionality:
//    - Create a function that takes user registration data as input and performs the necessary validations.
//    - Check for requirements like username uniqueness, password complexity, etc.
//    - If the registration data is valid, store the user details securely in a separate JSON file using the Node.js File System (fs) module.
// 4. Implement user login functionality:
//    - Create a function that takes user login credentials as input and verifies them against the stored user data in the JSON file.
//    - If the login credentials are valid, generate a session token or identifier and return it as a response.
// 5. Implement user profile management functionality:
//    - Create functions to handle profile retrieval and update requests.
//    - Read and update the user's profile information in the separate JSON file using the Node.js File System (fs) module.

// To implement these adjustments, you can use the Node.js File System (fs) module to read from and write to a separate JSON file to store the user data securely on the server-side. The JSON file can be created, updated, and accessed using functions provided by the fs module, such as `fs.readFile`, `fs.writeFile`, `fs.readFileSync`, `fs.writeFileSync`, etc.

// Remember to handle file read/write operations asynchronously and handle errors appropriately. Additionally, ensure proper file paths and file permissions are set when accessing the JSON file.

class UserData {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

function addUser(userData) {
  // Check if the file exists before reading
  if (!fs.existsSync("userdata.json")) {
    console.error("userdata.json does not exist.");
    return;
  }

  // Read the existing data from the JSON file
  let existingData = [];
  let jsonData;
  try {
    jsonData = fs.readFileSync("userdata.json", "utf-8");
    existingData = JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading userdata.json:", error);
    return;
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

  // Add the new user data to the existing array
  existingData.push(userData);

  // Convert the updated data to JSON string
  const updatedData = JSON.stringify(existingData, null, 2);

  // Write the updated data back to the JSON file
  fs.writeFileSync("userdata.json", updatedData, "utf-8");

  console.log("User added successfully.");
}

const newUser = new UserData("Alice", "password789", "alice@example.com");
addUser(newUser);

const newUser2 = new UserData("Bob", "password123", "bob@example.com");
addUser(newUser2);
