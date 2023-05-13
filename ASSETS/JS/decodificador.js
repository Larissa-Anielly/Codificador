// Decodificador

// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//------------------------------------------------------------
// capturar clique nos botões
const botao_criptografar = document.querySelector("#criptografar");
const botao_descriptografar = document.querySelector("#descriptografar");
const botao_copiar = document.querySelector("#copiar");

// Função para Criptografar (atravez de um escutador)
botao_criptografar.addEventListener("click", function () {

    const codigo = document.querySelector("#idcodigo");
    let frase = codigo.value;

    emptySpace(codigo);

    frase = frase.replace(/[e]/igm, "enter");
    frase = frase.replace(/[i]/igm, "imes");
    frase = frase.replace(/[a]/igm, "ai");
    frase = frase.replace(/[o]/igm, "ober");
    frase = frase.replace(/[u]/igm, "ufat");

    document.querySelector("#codigodecodificado").innerHTML = frase;

});


// Função para Descriptografar (atravez de um escutador)
botao_descriptografar.addEventListener("click", function () {

    const codigo = document.querySelector("#idcodigo");
    let frase = codigo.value;

    emptySpace(codigo);

    frase = frase.replace(/enter/igm, "e");
    frase = frase.replace(/imes/igm, "i");
    frase = frase.replace(/ai/igm, "a");
    frase = frase.replace(/ober/igm, "o");
    frase = frase.replace(/ufat/igm, "u");

    document.querySelector("#codigodecodificado").innerHTML = frase;
});


// Função para Copiar (atravez de um escutador)
botao_copiar.addEventListener("click", function () {

    const texto = document.querySelector("#codigodecodificado");
    navigator.clipboard.writeText(texto.textContent);

    alert("Código copiado com sucesso!!!")
})


// EmptySpace 

function emptySpace(codigo) {

    if (codigo.value === "" || codigo.value === null) {
        document.getElementById("emptySpace").style.display = "flex";
        document.getElementById("textoDecodificado").style.display = "none";
      } else {
        document.getElementById("emptySpace").style.display = "none";
        document.getElementById("textoDecodificado").style.display = "flex";
      }
}