function encriptar(){
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");
    parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textocifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat"); 

    if (texto.length != 0){
        document.getElementById("texto").value = textocifrado;
        titulomensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jfif";
} else {
    muñeco.src = "./img/muñeco.png";
    titulomensaje.textContent = "Ningun mensaje encontrado";
    parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
    alert("No has ingresado ningun texto");}
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");
    parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    textocifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("texto").value = textocifrado;
        titulomensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.png";
    } else {
        muñeco.src = "./img/muñeco.png";
        titulomensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("No has ingresado ningun texto");
    }
}

function copiar(){
    let texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
    
}