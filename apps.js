const input = document.getElementById ('input')
const output = document.getElementById ('output')
const encryptBoton = document.getElementById ('encrypt')
const decryptBoton = document.getElementById ('decrypt')
const copyBoton = document.getElementById('copy')

encryptBoton.addEventListener('click', encrypt)
decryptBoton.addEventListener('click', decrypt)
copyBoton.addEventListener ('click', copy)

function encrypt(){
//tomar el texto del input
    let text = input.value
//Transformar el textosegun la logica de encriptacion
    let encryptedText = text.replace(/e/g,"enter")
    encryptedText = encryptedText.replace(/i/g,"imes")
    encryptedText = encryptedText.replace(/a/g,"ai")
    encryptedText = encryptedText.replace(/o/g,"ober")
    encryptedText = encryptedText.replace(/u/g,"ufat")
//Mostrar el texto en el output
    output.value = encryptedText

}

function decrypt(){
    let text = input.value
    let decryptedText = text.replace(/enter/g,"e")
    decryptedText = decryptedText.replace(/imes/g,"i")
    decryptedText = decryptedText.replace (/ai/g,"a")
    decryptedText = decryptedText.replace (/ober/g,"o")
    decryptedText = decryptedText.replace (/ufat/g,"u")
    output.value = decryptedText
}

function copy(){
    let copyText = document.getElementById ('output')
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
}