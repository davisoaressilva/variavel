document.getElementById("btnComparar").addEventListener("click", function(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let resultado = document.getElementById("resultado");

    if(numero1 > numero2){
        resultado.innerText = "O Número " + numero1 + " é maior que " + numero2;
    }else if (numero1 < numero2){
        resultado.innerText = "O Número " + numero2 + " é maior que " + numero1;
    }else{
        resultado.innerText = "Números iguais"
    }
});