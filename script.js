const form = document.querySelector("#form-login")

const allData = JSON.parse(localStorage.getItem("registerData")) || []


allData.forEach(data =>{
    console.log(data.firstName);
})



form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const userName = document.getElementById("login-username")
    const password = document.getElementById("login-password")

    if(userName.value === "" && password.value === "") return 

        allData.forEach(data => {
        if(userName.value === data.firstName && password.value === data.password){
            window.location = "content.html"
        }else{
            //alert("Your are new here register first ")
            window.location = "index.html"
        }

    }) 

    userName.value = ""
    password.value = ""

    
})