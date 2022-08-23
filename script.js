const form = document.querySelector("#form-login")
const pwdError = document.getElementById("password-error-note")

const allData = JSON.parse(localStorage.getItem("registerData")) || []

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const userName = document.getElementById("login-username")
  const password = document.getElementById("login-password")

  if (userName.value === "" && password.value === "") return

  allData.forEach((data) => {
    if (userName.value === data.firstName) {
      if (password.value !== data.password) {
        pwdError.style.display = "block"
        pwdError.textContent = "Password is incorrect"
      } else {
        window.location = "content.html"
        clearForm()
      }
    } else if (
      userName.value === data.firstName &&
      password.value === data.password
    ) {
      window.location = "content.html"
      clearForm()
    } else {
      alert("You new here register first")
      window.location = "index.html"
      clearForm()
    }
  })
})

function clearForm() {
  userName.value = ""
  password.value = ""
}
