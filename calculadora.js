const numeroUno = document.getElementById("nUno");
const numeroDos = document.getElementById("nDos");
const boton = document.getElementById("btnSubmit");
const botonReset = document.getElementById("btnReset");
const seleccionador = document.getElementById("seleccionar");
const resultado = document.querySelector(".mensajeResultado");
const histResult = document.querySelector(".historial");

botonReset.addEventListener("click",()=>{
    numeroUno.value = 0;
    numeroDos.value = 0;
    resultado.innerHTML = "";
})


boton.addEventListener("click",()=>{
    let n1 = parseFloat(numeroUno.value);
    let n2 = parseFloat(numeroDos.value);
    let operacion = seleccionador.value;

    switch (operacion) {
        case "suma":
            resultado.innerHTML = "Resultado: " + sumar(n1,n2);
            break;
        case "resta":
            resultado.innerHTML =  "Resultado: " + restar(n1,n2);
            break;
        case "producto":
            resultado.innerHTML =  "Resultado: " + producto(n1,n2);
            break;
        case "division":
            resultado.innerHTML =  "Resultado: " + division(n1,n2);
            break;
        default:
            resultado.innerHTML = "Error";
            break;
    }
})


function sumar(n1,n2){
    try {
        if(Number.isNaN(n1) || Number.isNaN(n2))
        throw "Verifica que hayas ingresado un valor valido.";     
    } catch (error) {
        return error;
    }
    return n1+n2;
}
function restar(n1,n2){
    try {
        if(Number.isNaN(n1) || Number.isNaN(n2))
        throw "Verifica que hayas ingresado un valor valido. ";
    } catch (error) {
        return error;
    }
    return n1-n2;
}
function producto(n1=1,n2=1){
    try {
        if(Number.isNaN(n1) || Number.isNaN(n2))
        throw "Verifica que hayas ingresado un valor valido. ";
    } catch (error) {
        return error;
    }
    return n1*n2;
}
function division(n1,n2){
    try {
        if(Number.isNaN(n1) || Number.isNaN(n2))
        throw "Verifica que hayas ingresado un valor valido. ";
    } catch (error) {
        return error;
    }
    if(n2 == 0){
        return "No puedes dividir entre 0";
    }
    return n1/n2;
}
