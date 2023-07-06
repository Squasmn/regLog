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

  // Hier kannst du den eingegebenen Inhalt weiterverarbeiten, z. B. an das Backend senden
  console.log("Eingegebener Vorname: " + firstName);
  console.log("Eingegebener Nachname: " + lastName);
  console.log("Eingegebene Email: " + eingabeEmail);
  console.log("Eingegebenes Passwort: " + eingabePassword);
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
