// ESM syntax is supported.
export {};


class UserData {
  constructor(firstname, lastName, email,password ) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}


  
  console.log("Registrieren")
  let formRegist = document.getElementById("registrationFormular");
  formRegist.addEventListener("submit", createAccount);  






  function createAccount(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Absendens

  let firstName = document.getElementById("FirstName").value;
  let lastName = document.getElementById("LastName").value;
  let eingabeEmail = document.getElementById("NewEmail").value;
  let eingabePassword = document.getElementById("NewPassword").value;
  let eingabePassword2 = document.getElementById("NewPassword2").value;

// Funktion zur Überprüfung der Email-Adresse mit einem einfachen regulären Ausdruck
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
let regName = /\d+$/g;	

if (firstName == "" || regName.test(firstName)) {
  window.alert("Please enter your first name properly.");
  return false;
}

if (lastName == "" || regName.test(lastName)) {
  window.alert("Please enter your last name properly.");
  return false;
}

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
    eingabePassword != eingabePassword2
  ) {
    alert(
      "Bitte geben Sie ein Passwort ein. Das Passwort muss mindestens 8 Zeichen lang sein."
    );
    return;
  }
  if (localStorage.getItem("Users")==null) {
    localStorage.setItem("Users","[]")
  }
  const storedJson = localStorage.getItem("Users");
  let storedArray=JSON.parse(storedJson);
  for (var i = 0; i < storedArray.length; i++) {
    var obj = storedArray[i];
    if (obj.email==eingabeEmail ) {
      alert("Sie haben schon ein Konto")
      return;
    }
  }

console.log("went on")
/*console.log("Eingegebener Vorname: " + firstName);
console.log("Eingegebener Nachname: " + lastName);
console.log("Eingegebene Email: " + eingabeEmail);
console.log("Eingegebenes Passwort: " + eingabePassword);
*/
// Create a new instance of UserData with the entered data
const newUser = new UserData(firstName,lastName,eingabeEmail,eingabePassword);
console.log("New user created:", newUser);

// Add the new user to the system
userSaving(newUser)
event.target.reset();

localStorage.setItem('loggedUser', firstName +" "+ lastName);

location.href="/loggedIn.html"


}


function userSaving(UserData){
  if (localStorage.getItem("Users")==null) {
    localStorage.setItem("Users","[]")
  }
  const storedJson = localStorage.getItem("Users");
  let existingData=JSON.parse(storedJson);

  existingData.push(UserData);
  
  let json = JSON.stringify(existingData);
  localStorage.setItem("Users", json);

  getUsers()
}



function getUsers(){ 
const storedJson = localStorage.getItem("Users");
  if (storedJson) {
    // Umwandeln des JSON-Strings in ein Array von Objekten
    let storedArray = JSON.parse(storedJson);
  
    // Jetzt können Sie das Array verwenden, z.B.:
    console.log(storedArray);
  } else {
    alert("There is No User")
    // Der Wert ist nicht im LocalStorage vorhanden oder wurde gelöscht
  }
}

