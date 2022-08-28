// Variables  selección de mascotas de enemigos
const sectionSeleccionarMascota = document.getElementById(
	'seleccionar-mascota'
);
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascota-jugador');
// Variables  selección de ataques
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');
// Variables de ataques y vidas de los jugadores
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
// Variables para mostrar resultados del combate
const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataque-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataque-del-enemigo');

function iniciarJuego() {
	sectionSeleccionarAtaque.style.display = 'none';
	sectionReiniciar.style.display = 'none';
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
	botonFuego.addEventListener('click', ataqueFuego);
	botonAgua.addEventListener('click', ataqueAgua);
	botonTierra.addEventListener('click', ataqueTierra);
	botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
	sectionSeleccionarMascota.style.display = 'none';
	sectionSeleccionarAtaque.style.display = 'flex';

	if (inputHipodoge.checked) {
		spanMascotaJugador.innerHTML = 'Hipodoge';
	} else if (inputCapipepo.checked) {
		spanMascotaJugador.innerHTML = 'Capipepo';
	} else if (inputRatigueya.checked) {
		spanMascotaJugador.innerHTML = 'Ratigueya';
	} else {
		alert('Debes seleccionar un Mokepon');
	}

	seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
	let mascotaAleatoria = aleatorio(1, 3);

	if (mascotaAleatoria == 1) {
		spanMascotaEnemigo.innerHTML = 'Hipodoge';
	} else if (mascotaAleatoria == 2) {
		spanMascotaEnemigo.innerHTML = 'Capipepo';
	} else {
		spanMascotaEnemigo.innerHTML = 'Ratigueya';
	}
}

function ataqueFuego() {
	ataqueJugador = 'FUEGO';
	ataqueAleatorioEnemigo();
}

function ataqueAgua() {
	ataqueJugador = 'AGUA';
	ataqueAleatorioEnemigo();
}

function ataqueTierra() {
	ataqueJugador = 'TIERRA';
	ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
	let ataqueAleatorio = aleatorio(1, 3);

	if (ataqueAleatorio == 1) {
		ataqueEnemigo = 'FUEGO';
	} else if (ataqueAleatorio == 2) {
		ataqueEnemigo = 'AGUA';
	} else {
		ataqueEnemigo = 'TIERRA';
	}

	combate();
}

function combate() {
	if (ataqueJugador == ataqueEnemigo) {
	} else if (
		(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
		(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
		(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')
	) {
		crearMensaje('GANASTE');
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else {
		crearMensaje('PERDISTE');
		vidasJugador--;
		spanVidasJugador.innerHTML = vidasJugador;
	}
	revisarVidas();
}

function revisarVidas() {
	if (vidasEnemigo == 0) {
		crearMensajeFinal('¡FELICITACIONES <b>GANASTE!</b> 🏆');
		let sectionReiniciar = document.getElementById('reiniciar');
		sectionReiniciar.style.display = 'block';
	} else if (vidasJugador == 0) {
		crearMensajeFinal('LO SIENTO, <b>PERDISTE</b> 😢');
		let sectionReiniciar = document.getElementById('reiniciar');
		sectionReiniciar.style.display = 'block';
	}
}

function crearMensaje(resultado) {
	let notificacion = document.createElement('p');
	let nuevoAtaqueDelJugador = document.createElement('p');
	let nuevoAtqueDelEnemigo = document.createElement('p');

	sectionMensajes.innerHTML = resultado;
	nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
	nuevoAtqueDelEnemigo.innerHTML = ataqueEnemigo;

	ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
	ataquesDelEnemigo.appendChild(nuevoAtqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
	sectionMensajes.innerHTML = resultadoFinal;

	botonFuego.disabled = true;
	botonAgua.disabled = true;
	botonTierra.disabled = true;
}

function reiniciarJuego() {
	location.reload();
}

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
