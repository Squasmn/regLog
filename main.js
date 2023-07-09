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

 class userData {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  // Implement user registration functionality:

  // Create server-side routes to handle user registration requests.

  // Validate the input for requirements like username uniqueness, password complexity, etc.

  // Store the user details securely in a JSON file
}

/*let Halid = new userData("Halid", "1234", "Student");

console.log(Halid.username);

document.getElementById("InputEmail").placeholder="Schreib dein Email"
*/

class userDatam{
  constructor( email,password) {
    //this.username = username;
    this.email = email;
    this.password = password;
  }
}

function formularAbsenden(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Absendens

  // Den Inhalt der Eingabefelder Email und Password über die IDs abrufen
  let eingabeEmail = document.getElementById("InputEmail").value;
  let eingabePassword = document.getElementById("InputPassword").value;
  
  function trying(){
    let person=new userDatam(eingabeEmail,eingabePassword)
    console.log(person)
  }
  

  // Hier kannst du den eingegebenen Inhalt weiterverarbeiten, z. B. an das Backend senden
  trying()
  console.log("Eingegebener Email: " + eingabeEmail);
  console.log("Eingegebener Passwort: " + eingabePassword);
}


//"halid",1234,"gmail"


// Das Formular-Element über die ID abrufen
let form = document.getElementById("welcomeFormular");

// Die Funktion formularAbsenden aufrufen, wenn das Formular abgeschickt wird
form.addEventListener("submit", formularAbsenden);
