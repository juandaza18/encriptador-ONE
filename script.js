const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");

function validarTexto(){
    let textoEscrito = textArea.value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(textArea.value){
        if(!validarTexto()){
            const textoEncriptado = encriptar(textArea.value)
            mensaje.value = textoEncriptado
            textArea.value = "";
            mensaje.style.backgroundImage = "none"
        }
    }
    else{
        alert("Debes ingresar un texto")
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    if(textArea.value){
        if(!validarTexto()){
            const textoEncriptado = desencriptar(textArea.value)
            mensaje.value = textoEncriptado
            textArea.value = "";
        }
    }
    else{
        alert("Debes ingresar un texto")
    }  
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function copiar(){
    if(mensaje.value){
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value)
        mensaje.value = "";
        alert("Texto Copiado")
    }
    else{
        alert("No hay texto para ser copiado")
    }
}