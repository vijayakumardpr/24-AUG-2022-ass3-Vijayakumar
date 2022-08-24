const formRegister = document.getElementById("form-register")
const emailError = document.getElementById("email-error-notes")

let fistName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")

let errorNote = document.querySelector("#error-note")

//let localData = JSON.parse(localStorage.getItem("registerData")) || []

let allInformation = JSON.parse(localStorage.getItem("registerData")) || []

formRegister.addEventListener("submit", (e) => {
  e.preventDefault()
  if (
    firstName.value === "" &&
    lastName.value === "" &&
    email.value === "" &&
    password.value === ""
  )
    return

  if (password.value.length >= 10) {
    let personData = {
      firstName: fistName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    }

    allInformation.push(personData)

    localStorage.setItem("registerData", JSON.stringify(allInformation))

    window.location.href = "index.html"

    clearForm()
  } else {
    errorNote.style.display = "block"
    errorNote.textContent = `* Password must be at least 10 characters`
  }
})

function clearForm() {
  firstName.value = ""
  lastName.value = ""
  email.value = ""
  password.value = ""
}
