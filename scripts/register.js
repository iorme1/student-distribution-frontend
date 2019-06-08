import { postData } from './post.js';
import { alertSuccess, alertWarning } from './alerts.js'

function showRegisterModal() {
  $('#modalLoginForm').modal('toggle');
  $('#modalRegisterForm').modal('toggle');
}

function registerAccount(e) {
  e.preventDefault();
  let form = this;
  let baseURL = 'http://localhost:3001/api/v1';
  let email = form.elements["email"].value
  let password = form.elements["password"].value

  postData(`${baseURL}/users`, {
    email: email,
    password: password
  })
  .then(data => {
    console.log("response", data)
    alertSuccess("You have successfully registered an account.")
  })
  .catch(err => alertWarning("Error registering your account. Try again."))
}


document.querySelector('.create-acct-btn').onclick = showRegisterModal;
document.querySelector('.register-form').onsubmit = registerAccount;
