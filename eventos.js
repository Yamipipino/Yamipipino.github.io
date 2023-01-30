const edad= 30;

if (edad>=18) {
    document.getElementById("demo").innerHTML =
        console.log ("Rita V. Hilton  es mayor de edad, cumple con el requisito para el puesto.");
}   else {
        console.log ("Rita V. Hilton no cumple con los requisitos para el puesto.")
    }

document.getElementById("boton").onclick = function () {
        document.getElementById("demo").innerHTML = "Rita V. Hilton cumple el requisito. <br> Coordinar entrevista."
   }