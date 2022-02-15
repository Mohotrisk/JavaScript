//case sensitive
// nome é diferente de uma chamada Nome

//var: Serve para o Escopo Global
//let: Serve para o Escopo Local
//const: Serve para o Escopo Global

//uma das fotmas q acesso o meu DOM é por TAG: getElementByTagNAme()
// porID: getElementById()
//por Nome: getElementByName()
//por Classe: getElementsByClassName()
//por Seletor: querrySelector()

let  nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')


nome.style.width = "100%"
email.style.width= '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.Value.length < 3){
        txt.innerHTML "Nome inválido"
    } else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        nomeOK = true

    }

    }
    function validaEmail(){
    let txtEmail = document.querySelector('#email')
    if(email.value.indexOf)('@') ==-1 || email.value.indexOf(".") ==1 ) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else{
        txtEmail.anyHTML ="E-mail válido"
        txtEmail.style.color "green"
        emailOK = true

    }

    }
function validaAssunto(){
    let txtAssunto = document.querySelector("#assunto")
 if (assunto.value.lenght >=100){
     txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
     txtAssunto.style.color = "red"
     assuntoOK = true
     txtAssunto.style.display="block"
 }   else{
     txtAssunto.style.display="none"

 }
}
function enviar(){
    if(nomeOK == true && emailOK ==true && assunto == true){
        alert ('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
} 
function mapaZoom (){
mapa.style.width = "800px"
mapa.style.width ="600px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.width ="250px"
}