const mail = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");
const body = document.querySelector("#body");
const estilo1 = document.querySelector("#estilo");
const contraste = document.querySelector("#contraste");
const enviar = document.querySelector(".btn");
const caja = document.querySelector(".caja");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning="";
    let entrar = false
    parrafo.innerHTML= "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regexEmail.test(mail.value)){
        warning += "¡El email no es valido!";
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML= warning;
    }
})

estilo1.addEventListener("click", cambiarEstilo1);
contraste.addEventListener("click", cambiarContraste);

function cambiarEstilo1(){
    body.classList.add("estilo_uno");
    body.classList.remove("estilo_contraste");
    parrafo.classList.add("warning");
    parrafo.classList.remove("warning_cont");
    enviar.classList.add("btn");
    enviar.classList.remove("btn_dark");
    caja.classList.add("caja");
    caja.classList.remove("caja_dark");
}

function cambiarContraste(){
    body.classList.add("estilo_contraste");
    body.classList.remove("estilo_uno");
    parrafo.classList.add("warning_cont");
    parrafo.classList.remove("warning");
    enviar.classList.add("btn_dark");
    enviar.classList.remove("btn");
    caja.classList.add("caja_dark");
    caja.classList.remove("caja");
}