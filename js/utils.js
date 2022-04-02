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
}