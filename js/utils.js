function calcularFechaActual() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const date = new Date();
    let mes = meses[date.getMonth()];
    //document.getElementById("mes").innerHTML = mes;
    let anio = date.getFullYear();
    document.getElementById("fecha").innerHTML = mes + ' ' + anio;
}

function calculoTest(){
    document.getElementById("calcIngre").innerHTML = "+"+600;
    document.getElementById("calcEgre").innerHTML = "-"+100;
    document.getElementById("porcentajeGasto").innerHTML = 20+"%";
}

function agregar()
{
    var menu = document.getElementById("menu").value
    var descripcion = document.getElementById("descripcion").value
    var monto = document.getElementById("monto").value
    const lista = document.createElement("li");
    
    const node = document.createTextNode(descripcion+" "+monto);
    lista.appendChild(node);
    const ulTag = document.getElementById("lista");
    ulTag.appendChild(lista);

}

function calculoTotal(total){
    document.getElementById("total").innerHTML = "+"+500;
}

