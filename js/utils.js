const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const date = new Date();
let mes = meses[date.getMonth()];
//document.getElementById("mes").innerHTML = mes;
let anio = date.getFullYear();
document.getElementById("fecha").innerHTML = mes +' '+ anio;