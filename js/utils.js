function calcularFechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    document.getElementById("fecha").innerHTML = mes + ' ' + anio;
}

var total = 0;
var totalIngresos = 0;
var totalEgresos = 0;
if(document.getElementById("total").innerHTML == ''){
    document.getElementById("total").innerHTML = "+"+0;
}
if(document.getElementById("calcIngre").innerHTML == ''){
    document.getElementById("calcIngre").innerHTML = "+"+0;
}
if(document.getElementById("calcEgre").innerHTML == ''){
    document.getElementById("calcEgre").innerHTML = "-"+0;
}
if(document.getElementById("porcentajeGasto").innerHTML == ''){
    document.getElementById("porcentajeGasto").innerHTML = 0+"%";
}
var tag = document.getElementsByTagName("span");
tag.classList.add("badge badge-dark");

function agregar() {
    /* Consigo los valores en los tags */
    var menu = document.getElementById("menu").value;
    var descripcion = document.getElementById("descripcion").value;
    var monto = document.getElementById("monto").value;

    var tempTotal = document.getElementById("total").innerHTML;
    var tempTotalIngresos = document.getElementById("calcIngre").innerHTML;
    var tempTotalEgresos = document.getElementById("calcEgre").innerHTML;

    if(monto==""){
        monto = 0;
    }

    var valorActual = tempTotal.replace("+","");
    var valorActualIngresos = tempTotalIngresos.replace("+", "");
    var valorActualEgresos = tempTotalEgresos.replace("-", "");

    if(valorActual==undefined || valorActual== ""){
        valorActual= '0';
    }

    if(valorActualIngresos==undefined || valorActualIngresos== ""){
        valorActualIngresos= '0';
    }

    if(valorActualEgresos==undefined || valorActualEgresos== ""){
        valorActualEgresos= '0';
    }

    /* creo el nodo de la nueva transaccion y que agregaré a la lista*/
    var ulTag = "";
    const lista = document.createElement("li");
    const span = document.createElement("span");
    var node = "";
    var node2 = "";
    montoFloat = parseFloat(monto);
    if(menu=="1"){
        /* Hago la suma convirtiendo cada variable a decimal */
        total = parseFloat(valorActual) + montoFloat;

        /* Suma total solo ingresos */
        totalIngresos = parseFloat(valorActualIngresos) + montoFloat
        document.getElementById("calcIngre").innerHTML = " +"+totalIngresos;

        /* creacion del tag para agregarlo a la lista */
        node = document.createTextNode(descripcion+"  +"+monto);
        ulTag = document.getElementById("listaIngresos");
    } else {
        /* Hago la resta convirtiendo cada variable a decimal*/
        total = parseFloat(valorActual) - montoFloat;

        /* Suma total solo egresos */
        totalEgresos = parseFloat(valorActualEgresos) + montoFloat
        document.getElementById("calcEgre").innerHTML = " -"+totalEgresos;
        
        /* creacion del tag para agregarlo a la lista */
        var porcentaje = calcDetalleEgreso(montoFloat, totalIngresos);
        node = document.createTextNode(descripcion+"  -"+monto);
        node2 = document.createTextNode(porcentaje);
        ulTag = document.getElementById("listaEgresos");
    }
    lista.appendChild(node);
    if(node2 != ""){
        span.appendChild(node2);
    }
    calcPorcentajeGasto(totalIngresos, totalEgresos);
    
    /*Agrego la transaccion a la lista*/
    ulTag.appendChild(lista);
    ulTag.appendChild(span);
    if(total >= 0){
        document.getElementById("total").innerHTML = " +"+total;
    } else {
        document.getElementById("total").innerHTML = total;
    }    
}

function calcPorcentajeGasto(totalIngreso, totalEgreso) {
    var calculo = (totalEgreso*100)/totalIngreso;
    var porcentaje = calculo.toFixed(2);
    document.getElementById("porcentajeGasto").innerHTML = porcentaje+"%";
}

function calcDetalleEgreso(montoEgreso, totalIngreso) {
    var calculo = (montoEgreso*100)/totalIngreso;
    var porcentaje = calculo.toFixed(2);
    return porcentaje+"%";
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
