const form = document.querySelector("#form-login")
const pwdError = document.getElementById("error-note")
const userName = document.getElementById("login-username")
const password = document.getElementById("login-password")

const allData = JSON.parse(localStorage.getItem("registerData")) || []

let loginPerson = []

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (userName.value === "" && password.value === "") return

  let user = allData.some((data) => {
    if (userName.value === data.firstName && password.value !== data.password) {
      console.log("password incorrect")
      pwdError.style.display = "block"
      pwdError.textContent = `* Password incorrect`
    } else if (
      userName.value === data.firstName &&
      password.value === data.password
    ) {
      let newUser = {
        firstName: userName.value,
      }
      loginPerson.push(newUser)
      localStorage.setItem("newUser", JSON.stringify(loginPerson))
    } else if (
      userName.value !== data.firstName &&
      password.value !== data.password
    ) {
      window.location.href = "register.html"
    }
    return userName.value === data.firstName && password.value === data.password
  })
  if (user) {
    window.location.href = "content.html"
    clearForm()
  }
})

function clearForm() {
  userName.value = ""
  password.value = ""
}
