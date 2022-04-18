function calcularFechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    document.getElementById("fecha").innerHTML = mes + ' ' + anio;
}

//function Mostrar(Ingreso,Egreso){
    //document.getElementById("calcIngre").innerHTML ="";
    //document.getElementById("calcEgre").innerHTML = "-"+300;
    //document.getElementById("porcentajeGasto").innerHTML="%";
    
//}

var total = 0
if(document.getElementById("total").innerHTML == ''){
    document.getElementById("total").innerHTML = "+"+0;
}
    
function agregar() {
    /* Consigo los valores en los tags */
    var menu = document.getElementById("menu").value; /* Para validar si es egreso o ingreso, aun no lo uso */
    var descripcion = document.getElementById("descripcion").value;
    var monto = document.getElementById("monto").value;
    var tempTotal = document.getElementById("total").innerHTML;

    if(monto==""){
        monto = 0;
    }

    var valorActual = tempTotal.replace("+","");

    if(valorActual==undefined || valorActual== ""){
        valorActual= '0';
    }

    /* creo el nodo de la nueva transaccion y que agregaré a la lista*/
    var ulTag = "";
    const lista = document.createElement("li");
    var node = "";
    if(menu=="1"){
        /* Hago la suma convirtiendo cada variable a decimal*/
        total = parseFloat(valorActual) + parseFloat(monto);
        node = document.createTextNode(descripcion+"  +"+monto);
        ulTag = document.getElementById("listaIngresos");
    } else {
        /* Hago la resta convirtiendo cada variable a decimal*/
        total = parseFloat(valorActual) - parseFloat(monto);
        node = document.createTextNode(descripcion+"  -"+monto);
        ulTag = document.getElementById("listaEgresos");
        porcentaje = document.getElementById(listaEgresos*100/monto);
    }
    lista.appendChild(node);

    /* guardo el total como string para quitar algun simbolo extra*/
    totalString = total.toString();

    /*Agrego la transaccion a la lista*/
    ulTag.appendChild(lista);
    if(total >= 0){
        document.getElementById("total").innerHTML = " +"+total;
    } else {
        document.getElementById("total").innerHTML = total;
    }    
}

document.getElementById("porDefecto").click();

function cambioTipoTransaccion(evento, tipoTransaccion) {
    var contador; 
    var contenido; 
    var tabButton;
    contenido = document.getElementsByClassName("contenido");
    for (contador = 0; contador < contenido.length; contador++) {
        contenido[contador].style.display = "none";
    }
    tabButton = document.getElementsByClassName("tabButton");
    for (contador = 0; contador < tabButton.length; contador++) {
        tabButton[contador].className = tabButton[contador].className.replace(" active", "");
    }
    document.getElementById(tipoTransaccion).style.display = "block";
    evento.currentTarget.className += " active";
  }
