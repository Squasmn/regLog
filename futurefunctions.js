// // 4. Implement user login functionality:

// function login(username, password) {
//   // Check if the file exists before reading
//   if (!fs.existsSync("userdata.json")) {
//     console.error("userdata.json does not exist.");
//     return;
//   }

//   // Read the existing data from the JSON file
//   let existingData = [];
//   let jsonData;
//   try {
//     jsonData = fs.readFileSync("userdata.json", "utf-8");
//     existingData = JSON.parse(jsonData);
//   } catch (error) {
//     console.error("Error reading userdata.json:", error);
//     return;
//   }

//   // Check if the user exists
//   const user = existingData.find((user) => user.username === username);

//   if (!user) {
//     console.error("User does not exist.");
//     return;
//   }

//   // Check if the password is correct
//   if (user.password !== password) {
//     console.error("Password is incorrect.");
//     return;
//   }
// }
// for possible future use and functionality
//   // Generate a session token or identifier
//   const sessionToken = Math.random().toString(36).substr(2, 10);

//   // Return the session token or identifier
//   return sessionToken;
// }

// const sessionToken = login("Alice", "password789");
// console.log("Session token:", sessionToken);

// // 5. Implement user profile management functionality:

// function getUserProfile(username) {
//   // Check if the file exists before reading
//   if (!fs.existsSync("userdata.json")) {
//     console.error("userdata.json does not exist.");
//     return;
//   }

//   // Read the existing data from the JSON file
//   let existingData = [];
//   let jsonData;
//   try {
//     jsonData = fs.readFileSync("userdata.json", "utf-8");
//     existingData = JSON.parse(jsonData);
//   } catch (error) {
//     console.error("Error reading userdata.json:", error);
//     return;
//   }

//   // Check if the user exists
//   const user = existingData.find((user) => user.username === username);

//   if (!user) {
//     console.error("User does not exist.");
//     return;
//   }

//   // Return the user profile
//   return user;
// }

// const userProfile = getUserProfile("Alice");
// console.log("User profile:", userProfile);

// function updateUserProfile(username, newProfile) {
//   // Check if the file exists before reading
//   if (!fs.existsSync("userdata.json")) {
//     console.error("userdata.json does not exist.");
//     return;
//   }

//   // Read the existing data from the JSON file
//   let existingData = [];
//   let jsonData;
//   try {
//     jsonData = fs.readFileSync("userdata.json", "utf-8");
//     existingData = JSON.parse(jsonData);
//   } catch (error) {
//     console.error("Error reading userdata.json:", error);
//     return;
//   }

//   // Check if the user exists
//   const userIndex = existingData.findIndex(
//     (user) => user.username === username
//   );

//   if (userIndex === -1) {
//     console.error("User does not exist.");
//     return;
//   }

//   // Update the user profile
//   existingData[userIndex] = { ...existingData[userIndex], ...newProfile };

//   // Convert the updated data to JSON string
//   const updatedData = JSON.stringify(existingData, null, 2);

//   // Write the updated data back to the JSON file
//   fs.writeFileSync("userdata.json", updatedData, "utf-8");

//   console.log("User profile updated successfully.");
// }

// updateUserProfile("Alice", { email: "aliiiiiiice@example.com" });

// // 6. Implement user logout functionality:

// function logout(sessionToken) {
//   // Check if the file exists before reading
//   if (!fs.existsSync("userdata.json")) {
//     console.error("userdata.json does not exist.");
//     return;
//   }

//   // Read the existing data from the JSON file
//   let existingData = [];
//   let jsonData;
//   try {
//     jsonData = fs.readFileSync("userdata.json", "utf-8");
//     existingData = JSON.parse(jsonData);
//   } catch (error) {
//     console.error("Error reading userdata.json:", error);
//     return;
//   }

//   // Check if the user exists
//   const userIndex = existingData.findIndex(
//     (user) => user.sessionToken === sessionToken
//   );

//   if (userIndex === -1) {
//     console.error("User does not exist.");
//     return;
//   }

//   // Delete the session token or identifier
//   existingData[userIndex].sessionToken = null;

//   // Convert the updated data to JSON string
//   const updatedData = JSON.stringify(existingData, null, 2);

//   // Write the updated data back to the JSON file
//   fs.writeFileSync("userdata.json", updatedData, "utf-8");

//   console.log("User logged out successfully.");
// }

// logout(sessionToken);
