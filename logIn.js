let formLogIn = document.getElementById("welcomeFormular");
  formLogIn.addEventListener("submit", logIn); 

  function logIn(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Absendens
  
   
    let eingabeEmail = document.getElementById("InputEmail").value;
    let eingabePassword = document.getElementById("InputPassword").value;
   
  
  // Funktion zur Überprüfung der Email-Adresse mit einem einfachen regulären Ausdruck
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
      eingabePassword.length < 8 
    ) {
      alert(
        "Bitte geben Sie ein Passwort ein. Das Passwort muss mindestens 8 Zeichen lang sein."
      );
      return;
    }
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
      }
    }