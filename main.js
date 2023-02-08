
/* FUNCION PARA CODIFICAR */
var encodedString;
function encryptString(){
    encodedString = document.getElementById("text").value;
    encodedString = encodedString.replace(/e/gm,"enter");
    encodedString = encodedString.replace(/i/gm,"imes");
    encodedString = encodedString.replace(/a/gm,"ai");
    encodedString = encodedString.replace(/o/gm,"ober");
    encodedString = encodedString.replace(/u/gm,"ufat");
    
    document.getElementById("outputText").innerHTML  = encodedString; //MOSTRANDO INPUT EN TEXTAREA DEL OUTPUT
    document.querySelector(".image-box").style.display = "none"; 
    document.querySelector(".hidden-container").style.display = "block";
}
/* FUNCION PARA DECODIFICAR */
var decodedString;
function decryptString(){
    var decodedString = document.getElementById("text").value;
    decodedString = decodedString.replace(/enter/gm,"e");
    decodedString = decodedString.replace(/imes/gm,"i");
    decodedString = decodedString.replace(/ai/gm,"a");
    decodedString = decodedString.replace(/ober/gm,"o");
    decodedString = decodedString.replace(/ufat/gm,"u");
    //estoy poniendolo en el output textarea
    document.getElementById("outputText").innerHTML  = decodedString;
    document.querySelector(".image-box").style.display = "none";
    document.querySelector(".hidden-container").style.display = "block";
    
}
/* FUNCION COPIAR | Al presionar el Boton "copiar" copia el contenido del output y aparece 
el mensaje de "copiado" , desaparece al presionar una tecla */
function copy(){
    var txt=document.getElementById("outputText");
    txt.select();
    document.execCommand("copy");

    document.getElementById("anuncio").value= anuncio;
    anuncio.innerHTML=("copiado!");
    document.addEventListener("keydown", desapareceanuncio);
    function desapareceanuncio(){
        anuncio.innerHTML=("");
    }
}


