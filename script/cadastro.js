let nome = document.getElementById("nome")
let cpf = document.getElementById("cpf")
let ende = document.getElementById("ende")
let email = document.getElementById("email")
let tele = document.getElementById("tele")
let senha = document.getElementById("senha")
let confsenha = document.getElementById("confsenha")

function alerta(mensagem){
    const warndiv = document.getElementById("warn")
    warndiv.innerText = mensagem
}

function cadastrarUsuario(e){
    e.preventDefault()

    if(confsenha.value !== senha.value){
        alerta ("Senhas diferentes")
        return 
    }

    const cadastro = {
        nome: nome.value,
        cpf: cpf.value,
        ende: ende.value,
        email: email.value,
        tele: tele.value,
        senha: senha.value,
        confsenha: confsenha.value
    }

    console.log(cadastro)
    localStorage.setItem("user",JSON.stringify(cadastro))
}

document.getElementById("form-1").addEventListener("submit", cadastrarUsuario)
