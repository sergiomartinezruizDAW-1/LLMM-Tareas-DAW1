

function mostrarDireccionRed(){
    document.getElementById("ip").textContent="192.168.1.0";
}
function mostrarBrodcast(){
    document.getElementById("ip").textContent="192.168.1.255";
}

function generarIP(){
    let numero_aleatorio;
    numero_aleatorio = Math.floor(Math.random() * 254) +2;
    document.getElementById("ip").textContent="192.168.1."+numero_aleatorio;
}

function mostrarMascara(){
    document.getElementById("ip").textContent="255.255.255.0";
}

function mostrarPuertaEnlace(){
    document.getElementById("ip").textContent="192.168.1.1";
}