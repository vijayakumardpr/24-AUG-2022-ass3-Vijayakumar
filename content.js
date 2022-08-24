const fullName = document.getElementById("fullName")
const signOut = document.querySelector(".signout")

const personData = JSON.parse(localStorage.getItem("newUser")) || []

personData.forEach((data) => {
  fullName.textContent = `${data.firstName}`
})

signOut.addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.removeItem("newUser")
  fullName.textContent = `Access Denied`
  window.location.href = "index.html"
})
