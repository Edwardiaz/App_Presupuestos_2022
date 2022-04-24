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
function aplicarAtributos(){
    var tag = document.getElementsByTagName("span");
    //const nodo3 = document.querySelectorAll("span");
    for (let i = 0; i < tag.length; i++) {
        if(!tag[i].getAttribute('class')){
            tag[i].setAttribute("id", "porcentajeEgreso");
            tag[i].setAttribute("class", "badge");
        }
    }
}

function agregar() {
    /* Consigo los valores en los tags */
    var menu = document.getElementById("menu").value;
    var descripcion = document.getElementById("descripcion").value;
    var monto = document.getElementById("monto").value;

    var valorActual = document.getElementById("total").innerHTML;
    var valorActualIngresos = document.getElementById("calcIngre").innerHTML;
    var tempTotalEgresos = document.getElementById("calcEgre").innerHTML;

    if(monto==""){
        monto = 0;
    }

  /*   var valorActual = tempTotal.replace("+","");
    var valorActualIngresos = tempTotalIngresos.replace("+", "");*/
    var valorActualEgresos = tempTotalEgresos.replace("-", ""); 

    if(valorActual=="+0" || valorActual== "" || valorActual==" +0.00"){
        valorActual= '+0.00';
    }

    if(valorActualIngresos==undefined || valorActualIngresos== ""){
        valorActualIngresos= '+0.00';
    }

    if(valorActualEgresos==undefined || valorActualEgresos== ""){
        valorActualEgresos= '0.00';
    }

    /* creo el nodo de la nueva transaccion y que agregaré a la lista*/
    var ulTag = "";
    var lista = "", span = "";
    var nodo1 = "", nodo2 = "";
    montoFloat = parseFloat(monto);
    if(menu=="1"){
        /* Hago la suma convirtiendo cada variable a decimal */
        total = parseFloat(valorActual) + montoFloat;

        lista = document.createElement("li");

        /* Suma total solo ingresos */
        totalIngresos = parseFloat(valorActualIngresos) + montoFloat
        document.getElementById("calcIngre").innerHTML = " +"+totalIngresos.toFixed(2);

        /* creacion del tag para agregarlo a la lista */
        nodo1 = document.createTextNode(descripcion+"  +"+montoFloat.toFixed(2));
        ulTag = document.getElementById("listaIngresos");
    } else if(menu=="2" && valorActual != "+0.00") {
        /* Hago la resta convirtiendo cada variable a decimal*/
        total = parseFloat(valorActual) - montoFloat;
        if(total < 0){
            alert("Tus fondos son insuficientes...")
        } else {
            lista = document.createElement("li");
            span = document.createElement("span");

            /* Suma total solo egresos */
            totalEgresos = parseFloat(valorActualEgresos) + montoFloat
            document.getElementById("calcEgre").innerHTML = " -"+totalEgresos.toFixed(2);
            
            /* creacion del tag para agregarlo a la lista */
            var porcentaje = calcDetalleEgreso(montoFloat, totalIngresos);
            nodo1 = document.createTextNode(descripcion+"  -"+montoFloat.toFixed(2));
            nodo2 = document.createTextNode(porcentaje);
            ulTag = document.getElementById("listaEgresos");
        }
    } else {
        alert("Tu cuenta posee un saldo de $0.00, no puedes generar una transacción de egreso.")
    }
    lista.appendChild(nodo1);
    /*Agrego la transaccion a la lista y verifico si existe algo en nodo2 asi se procede a agregar el tag de dicho nodo*/
    ulTag.appendChild(lista);
    if(nodo2 != ""){
        span.appendChild(nodo2);
        ulTag.appendChild(span);
    }

    calcPorcentajeGasto(totalIngresos, totalEgresos);
    
    document.getElementById("total").innerHTML = " +"+total.toFixed(2);
    
    aplicarAtributos();    
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

/* Pone por defecto el tab cuyo id es porDefecto */
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
