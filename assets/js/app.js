const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

// Buat login account
function login_berhasil() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin@gmail.com" && password === "admin") {
    window.location.href = "dashboard.html";
    alert("Login berhasil. Silahkan klik ok!")
  } else {
    alert("Login gagal.");
  }
}

