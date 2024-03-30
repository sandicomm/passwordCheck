
const password = document.getElementById("passInput")
const message = document.getElementById("message")

password.addEventListener("input", ()=>{
    const passwordVal = password.value
    checkPasswordStrength(passwordVal)
})

function checkPasswordStrength(passwordVal) {
    // Initialize variables
    var strength = 0;
    var tips = "";
  
    // Check password length
    if (passwordVal.length < 8) {
      tips += "Make the password longer. ";
    } else {
      strength += 1;
    }
  
    // Check for mixed case
    if (passwordVal.match(/[a-z]/) && passwordVal.match(/[A-Z]/)) {
      strength += 1;
    } else {
      tips += "Use both lowercase and uppercase letters. ";
    }
  
    // Check for numbers
    if (passwordVal.match(/\d/)) {
      strength += 1;
    } else {
      tips += "Include at least one number. ";
    }
  
    // Check for special characters
    if (passwordVal.match(/[^a-zA-Z\d]/)) {
      strength += 1;
    } else {
      tips += "Include at least one special character. ";
    }
  
    // Return results
    if (strength < 2) {
      message.innerText = "Easy to guess. " + tips;
      message.style.backgroundColor = "red"
    } else if (strength === 2) {
        message.innerText = "Medium difficulty. " + tips;
        message.style.backgroundColor = "orange"
    } else if (strength === 3) {
        message.innerText = "Difficult. " + tips;
        message.style.backgroundColor = "yellow"
    } else {
        message.innerText = "Extremely difficult. " + tips;
        message.style.backgroundColor = "green"
    }
  }

