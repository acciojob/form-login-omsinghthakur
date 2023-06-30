function getFormvalue() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Attach the function to the form's submit event
const form = document.getElementById("myForm");
form.addEventListener("submit", getFormValue);   
