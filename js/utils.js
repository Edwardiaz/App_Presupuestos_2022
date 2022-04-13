function calcularFechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    document.getElementById("fecha").innerHTML = mes + ' ' + anio;
}

function calculoTest(){
    document.getElementById("calcIngre").innerHTML = "+"+600;
    document.getElementById("calcEgre").innerHTML = "-"+100;
    document.getElementById("porcentajeGasto").innerHTML = 20+"%";

}

var total = 0
if(document.getElementById("total").innerHTML == ''){
    document.getElementById("total").innerHTML = "+"+0;
}

function agregar()
{
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

    /* Hago la suma convirtiendo cada variable a decimal*/
    total = parseFloat(valorActual) + parseFloat(monto);

    /* creo el nodo de la nueva transaccion y que agregaré a la lista*/
    const lista = document.createElement("li");
    const node = document.createTextNode(descripcion+" "+monto);
    lista.appendChild(node);
    const ulTag = document.getElementById("lista");

    /* guardo el total como string para quitar algun simbolo extra*/
    totalString = total.toString();

    /*Agrego la transaccion a la lista*/
    ulTag.appendChild(lista);
    document.getElementById("total").innerHTML = "+"+total;
    
}


