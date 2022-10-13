const email = document.getElementById("email")
const senha = document.getElementById("senha")

function logar(e){
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("user"))
    const warndiv = document.getElementById("warn")
    if(senha.value == user.senha && email.value == user.email){
        warndiv.innerText = "Login Correto"
        return 
    }

    warndiv.innerText = "login ou senha incorretos"

}

document.getElementById("form-login").addEventListener("submit", logar)