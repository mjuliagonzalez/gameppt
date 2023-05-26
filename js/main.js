let puntosUsuario = 0;
let puntosPC = 0; 

let intrucciones = document.querySelector ("#intrucciones");
let contenedorPuntosUsuario = document.querySelector ("#puntos-usuario");
let contenedorPuntosPC = document.querySelector ("#puntos-computadora");
let mensaje = document.querySelector ("#mensaje");
let contenedorGanaPunto = document.querySelector ("#gana-punto");
let eligeTuArma = document.querySelector ("#elegir-tu-arma");

let contenedorEleccionUsuario = document.querySelector ("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector ("#eleccion-computadora");

let botonesArmas = document.querySelectorAll (".arma");
botonesArmas.forEach (boton => {
    boton.addEventListener ("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor (Math.random () * 3)
    let eleccionUsuario = e.currentTarget.id;

    // piedra => 0 vence a tijera
    // papel => 1 vence a piedra
    // tijera => 2 vence a papel
    // si son iguales es empate

    if (eleccionPC === 0){
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1){
        eleccionPC = "papel📄";
    } else if (eleccionPC === 2){
        eleccionPC = "tijera✂️";
    };

    if (
        (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📄") ||
        (eleccionUsuario === "papel📄" && eleccionPC === "piedra🪨")
        ){

        ganaUsuario();

    } else if (
        (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📄") ||
        (eleccionPC === "papel📄" && eleccionUsuario === "piedra🪨")
    ){
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5){

        if (puntosUsuario === 5){
            intrucciones.innerText = "¡Ganaste el juego! 🏆"
        }

        if(puntosPC === 5){
            intrucciones.innerText = "¡Game Over! 😶‍🌫️"
        }

        eligeTuArma.classList.add ("disabled");
        reiniciar.classList.remove ("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
};

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "🔥¡Ganaste un punto!🔥";
};

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = " ¡La computadora ganó un punto! 😢";
};

function empate() {
    contenedorGanaPunto.innerText = " ¡Empate! 😊 ";
};

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    eligeTuArma.classList.remove("disabled");
    mensaje.classList.add ("disabled");

    puntosUsuario = 0;
    puntosPC = 0; 

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    intrucciones.innerHTML = "El primero en llegar a 5 puntos gana."
}
