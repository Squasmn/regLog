//-------------------Formular Anmelde Validierung------------------
export function formularAnmelden(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Absendens

  // Den Inhalt der Eingabefelder Email und Password über die IDs abrufen
  let eingabePassword = document.getElementById("InputPassword").value;
  // Eingabevalidierung
  if (!eingabeEmail || eingabeEmail.trim() === "") {
    alert("Bitte geben Sie eine Email-Adresse ein.");
    return;
  }

  if (!validateEmail(eingabeEmail)) {
    alert("Bitte geben Sie eine gültige Email-Adresse ein.");
    return;
  }

  if (
    !eingabePassword ||
    eingabePassword.trim() === "" ||
    eingabePassword.length < 8
  ) {
    alert(
      "Bitte geben Sie ein Passwort ein. Das Passwort muss mindestens 8 Zeichen lang sein."
    );
    return;
  }

  // Hier kannst du den eingegebenen Inhalt weiterverarbeiten, z. B. an das Backend senden
  console.log("Eingegebene Email: " + eingabeEmail);
  console.log("Eingegebenes Passwort: " + eingabePassword);
}

// Das Formular-Element über die ID abrufen
let form = document.getElementById("formularAnmelden");

// Die Funktion formularAbsenden aufrufen, wenn das Formular abgeschickt wird
form.addEventListener("submit", formularAbsenden);

// Funktion zur Überprüfung der Email-Adresse mit einem einfachen regulären Ausdruck
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//---------------------------------Formular Create an Account!-----------------

export function formularCreateAccount(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Absendens

  let firstName = document.getElementById("inputFirstname").value;
  let lastName = document.getElementById("inputLastname").value;
  let eingabePassword = document.getElementById("inputPassword").value;
  let repeatEingabePassword = document.getElementById(
    "repeatInputpassword"
  ).value;

  let eingabeEmail = document.getElementById("inputEmail").value;

  // Eingabevalidierung
  if (!eingabeEmail || eingabeEmail.trim() === "") {
    alert("Bitte geben Sie eine Email-Adresse ein.");
    return;
  }

  if (!validateEmail(eingabeEmail)) {
    alert("Bitte geben Sie eine gültige Email-Adresse ein.");
    return;
  }

  if (
    !eingabePassword ||
    eingabePassword.trim() === "" ||
    eingabePassword.length < 8 ||
    eingabePassword != repeatEingabePassword
  ) {
    alert(
      "Bitte geben Sie ein Passwort ein. Das Passwort muss mindestens 8 Zeichen lang sein."
    );
    return;
  }

  // // Hier kannst du den eingegebenen Inhalt weiterverarbeiten, z. B. an das Backend senden
  // console.log("Eingegebener Vorname: " + firstName);
  // console.log("Eingegebener Nachname: " + lastName);
  // console.log("Eingegebene Email: " + eingabeEmail);
  // console.log("Eingegebenes Passwort: " + eingabePassword);

  const user1 = new userData("John", "eingabePassword", "john@example.com");
  const user2 = new userData("Jane", "password456", "jane@example.com");
}

// Das Formular-Element über die ID abrufen
let form = document.getElementById("formularCreateAccount");

// Die Funktion formularAbsenden aufrufen, wenn das Formular abgeschickt wird
form.addEventListener("submit", formularCreateAccount);

// Funktion zur Überprüfung der Email-Adresse mit einem einfachen regulären Ausdruck
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//-----------------------------------David------------------------------------

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

// Add more instances as needed

storeUserData(user1, user2);
// Call the function for additional instances
