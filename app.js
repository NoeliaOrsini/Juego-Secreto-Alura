let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 15;
let maximosIntentos =3;

console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elemntoHtml = document.querySelector (elemento);
    elemntoHtml.innerHTML = texto;   
    return; 
}

function verificarIntento () {
let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);

if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento ('p', `Felicitaciones! Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
    document.getElementById ('reiniciar').removeAttribute('disabled');
} else {
    //el usuario  no acertó
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p','El número secreto es menor');
    } else {
        asignarTextoElemento ('p', 'El número secreto es mayor');
    }
    intentos++;
    if (intentos > maximosIntentos) {
     asignarTextoElemento ('p', `Usaste tus ${maximosIntentos} intentos, vuelve a participar`);
    document.getElementById ('reiniciar').removeAttribute('disabled');

    }
    limpiarCaja ();
}
    return;
}

function limpiarCaja () {
    document.querySelector ('#valorUsuario').value = "";
}
function generarNumeroSecreto () {
   let numeroGenerado =  Math.floor (Math.random ()*numeroMaximo)+1;

   console.log (numeroGenerado);
   console.log (listaNumerosSorteados);
   // ver si ya sorteamos todos los números

if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento ('p', 'Ya se sorteraron todos los números posibles');
} else {

        // si el número generado está incluído en la lista
        if (listaNumerosSorteados.includes (numeroGenerado)) {
            return generarNumeroSecreto ();
        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento ('h1','JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento ('p', `Elige un número entre 1 y ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
    maximosIntentos = 3;

}

function reiniciarJuego () {
    //limpiar la caja
    limpiarCaja ();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    // inicializar el número de  intentos
    condicionesIniciales ();
    //deshabilitar el botón de nuevo juego
    document.querySelector ('#reiniciar').setAttribute ('disabled', 'true');
    
}

condicionesIniciales ();
