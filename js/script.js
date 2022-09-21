const emailInput = document.getElementById("email");
const emailBtn = document.getElementById("email-btn");
const emailForm = document.getElementById("email-form");
const errMessage = document.getElementById("err-massage");

emailInputValidation = (input) => {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (input.value.match(validRegex)) {
    errMessage.innerHTML = "";
    emailInput.style.border = "1px solid hsl(223, 100%, 88%)";
    return true;
  } else {
    errMessage.innerHTML = "Please provide a valid email address";
    document;
    emailInput.setAttribute("placeholder", "example@email.com");
    emailInput.style.border = "1px solid #ff0000";
    return false;
  }
};

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  emailInputValidation(emailInput);
});
