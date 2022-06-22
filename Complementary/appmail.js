// variable
let sendButn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  textarea = document.querySelector("#message"),
  form = document.querySelector("#emailform"),
  resetbtn=document.querySelector('#resetBtn');

// eventListner
eventlistener();
function eventlistener() {
  document.addEventListener("DOMContentLoaded", appInit);
  email.addEventListener("blur", validatefield);
  subject.addEventListener("blur", validatefield);
  textarea.addEventListener("blur", validatefield);
  resetbtn.addEventListener('click' , submitEvt)
 
}

// function
function submitEvt() {
  form.reset()
}
function appInit() {
  sendButn.disabled = true;
  sendButn.style.backgroundColor='gray'
}

function validatefield() {
  validateLength(this);

  if (this.type === "email") {
    validateEmail(this);
  }
  let error = document.querySelectorAll(".error");
  if (email.value !== "" && textarea.value !== "") {
    if (error.length === 0) {
      sendButn.disabled = false;
      sendButn.style.backgroundColor='#1a73e8'

    }
  }

}

function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}
function validateEmail(field) {
  const emailText = field.value;
  if (emailText.includes("@") && emailText.includes('.com')) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.placeholder = "Recipients";

    field.classList.add("error");
  }
}


