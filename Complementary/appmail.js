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


// function submitEvent(e) {
//   e.preventDefault();
//   let loadAni = document.querySelector("#spinner");
//   loadAni.style.display = "block";



// } 




// variables
// const sendBtn = document.querySelector("#sendBtn"),
//   email = document.querySelector("#email"),
//   subject = document.querySelector("#subject"),
  // message = document.querySelector("#message"),
  // resetBtn = document.querySelector("#resetBtn"),
  // form = document.querySelector("#email-form");

// eventListeners
// eventListeners();
// function eventListeners() {
  // app initialization
  // document.addEventListener("DOMContentLoaded", appInit);
  // validating fields
  // email.addEventListener("blur", validateField);
  // subject.addEventListener("blur", validateField);
  // message.addEventListener("blur", validateField);

  // reset btn
  // resetBtn.addEventListener("click", resetForm);

  // submit form and show gif
  // form.addEventListener("submit", submitForm);
// }

// functions
// function appInit() {
  // disabled send button on load
  // sendBtn.disabled = true;
// }

// sending email and submit the form
// function submitForm(e) {
  // e.preventDefault();

  // show the spinner
  // const spinner = document.getElementById("spinner");
  // spinner.style.display = "block";

  // make second gif
  // const sendEmailImg = document.createElement("img");
  // sendEmailImg.src = "../animator/pluse.png";
  // sendEmailImg.style.display = "block";

  // show the email send image
  // setTimeout(function() {
    // hide first spinner
    // spinner.style.display = "none";

    // append image to the HTML
    // const loaders = document.querySelector("#loaders");
    // loaders.appendChild(sendEmailImg);

    // reset form and remove
//     setTimeout(() => {
//       resetForm();
//       sendEmailImg.remove();
//     }, 5000);
//   }, 3000);
// }

// validating fields of form
// function validateField() {
  // validate length of fields
  // validateLength(this);

  // validate email field
  // if (this.type === "email") {
  //   validateEmail(this);
  // }

//   let error = document.querySelectorAll(".error");
//   if (email.value !== "" && subject.value !== "" && message.value !== "") {
//     if (error.length === 0) {
//       sendBtn.disabled = false;
//     }
//   }
// }

// validate length of fields
// function validateLength(field) {
//   if (field.value.length > 0) {
//     field.style.borderBottomColor = "green";
//     field.classList.remove("error");
//   } else {
//     field.style.borderBottomColor = "red";
//     field.classList.add("error");
//   }
// }

// validate email field contains @
// function validateEmail(field) {
//   const emailText = field.value;
//   if (emailText.includes("@")) {
//     field.style.borderBottomColor = "green";
//     field.classList.remove("error");
//   } else {
//     field.style.borderBottomColor = "red";
//     field.classList.add("error");
//   }
// }

// reset form with button
// function resetForm() {
//   form.reset();
// }
