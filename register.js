const formRegister = document.getElementById("form-register")

let localData = JSON.parse(localStorage.getItem("registerData")) || []


let allInformation = []

formRegister.addEventListener("submit", ()=>{
    let fistName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    if(firstName.value === "" && lastName.value === "" && email.value==="" && password.value==="") return 

    let personData = {
        firstName: fistName.value,
        lastName: lastName.value,
        email:email.value,
        password: password.value
    }


    allInformation.push(personData)

    
    localStorage.setItem("registerData", JSON.stringify(allInformation))


    
    
    firstName.value= ""
    lastName.value=""
    email.value=""
    password.value=""



})