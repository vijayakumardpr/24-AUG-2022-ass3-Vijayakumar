const formRegister = document.getElementById("form-register")
const emailError = document.getElementById("email-error-notes")

//let localData = JSON.parse(localStorage.getItem("registerData")) || []

let allInformation = JSON.parse(localStorage.getItem("registerData")) || []

formRegister.addEventListener("submit", () => {
  let fistName = document.getElementById("firstName")
  let lastName = document.getElementById("lastName")
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  if (
    firstName.value === "" &&
    lastName.value === "" &&
    email.value === "" &&
    password.value === ""
  )
    return

  allInformation.forEach((data) => {
    if (email.value === data.email) {
      emailError.style.display = "block"
      emailError.textContent = "Email already registered"
      return
    }
    return
  })

  let personData = {
    firstName: fistName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  }

  allInformation.push(personData)

  console.log(personData)

  localStorage.setItem("registerData", JSON.stringify(allInformation))

  clearForm()
})

function clearForm() {
  firstName.value = ""
  lastName.value = ""
  email.value = ""
  password.value = ""
}
