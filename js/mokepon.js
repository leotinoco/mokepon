// Variables  selección de mascotas de enemigos
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const sectionSeleccionarMascota = document.getElementById(
	'seleccionar-mascota'
);
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const spanMascotaJugador = document.getElementById('mascota-jugador');
// Variables  selección de ataques
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const contenedorAtaques = document.getElementById('contenedor-ataques');
const botonReiniciar = document.getElementById('boton-reiniciar');
// Variables de ataques y vidas de los jugadores
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let ataqueJugador = [];
let mokepones = [];
let opcionDeMokepones;
let ataquesMokepon;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
// Variables para mostrar resultados del combate
const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataque-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataque-del-enemigo');

class Mokepon {
	constructor(nombre, foto, vida) {
		this.nombre = nombre;
		this.foto = foto;
		this.vida = vida;
		this.ataques = [];
	}
}

let hipodoge = new Mokepon(
	'Hipodoge',
	'../assets/mokepons_mokepon_hipodoge_attack.png',
	5
);

let capipepo = new Mokepon(
	'Capipepo',
	'../assets/mokepons_mokepon_capipepo_attack.png',
	5
);

let ratigueya = new Mokepon(
	'Ratigueya',
	'../assets/mokepons_mokepon_ratigueya_attack.png',
	5
);

hipodoge.ataques.push(
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '🌱', id: 'boton-tierra' }
);

capipepo.ataques.push(
	{ nombre: '🌱', id: 'boton-tierra' },
	{ nombre: '🌱', id: 'boton-tierra' },
	{ nombre: '🌱', id: 'boton-tierra' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '🌱', id: 'boton-tierra' }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
	sectionSeleccionarAtaque.style.display = 'none';

	mokepones.forEach((mokepon) => {
		opcionDeMokepones = `
		<input type="radio" name="mascota" id="${mokepon.nombre}" />
		<label for="${mokepon.nombre}" class="tarjeta-de-mokepon">
			<p>${mokepon.nombre}</p>
			<img
				src="${mokepon.foto}"
				alt="${mokepon.nombre}" />
		</label>		
		`;
		contenedorTarjetas.innerHTML += opcionDeMokepones;
	});

	inputHipodoge = document.getElementById('Hipodoge');
	inputCapipepo = document.getElementById('Capipepo');
	inputRatigueya = document.getElementById('Ratigueya');

	sectionReiniciar.style.display = 'none';
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
	botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
	sectionSeleccionarMascota.style.display = 'none';
	sectionSeleccionarAtaque.style.display = 'flex';

	if (inputHipodoge.checked) {
		spanMascotaJugador.innerHTML = inputHipodoge.id;
		mascotaJugador = inputHipodoge.id;
	} else if (inputCapipepo.checked) {
		spanMascotaJugador.innerHTML = inputCapipepo.id;
		mascotaJugador = inputCapipepo.id;
	} else if (inputRatigueya.checked) {
		spanMascotaJugador.innerHTML = inputRatigueya.id;
		mascotaJugador = inputRatigueya.id;
	} else {
		alert('Debes seleccionar un Mokepon');
	}
	extraerAtaques(mascotaJugador);
	seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
	let ataques;
	for (let i = 0; i < mokepones.length; i++) {
		if (mascotaJugador === mokepones[i].nombre) {
			ataques = mokepones[i].ataques;
		}
	}
	mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
	ataques.forEach((ataque) => {
		ataquesMokepon = `
		<button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
		`;
		contenedorAtaques.innerHTML += ataquesMokepon;
	});

	console.log(ataques);

	botonFuego = document.getElementById('boton-fuego');
	botonAgua = document.getElementById('boton-agua');
	botonTierra = document.getElementById('boton-tierra');
	botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque() {
	botones.forEach((boton) => {
		boton.addEventListener('click', (e) => {
			if (e.target.textContent === '💧') {
				ataqueJugador.push('AGUA');
				console.log(ataqueJugador);
				boton.disabled = true;
			} else if (e.target.textContent === '🔥') {
				ataqueJugador.push('FUEGO');
				console.log(ataqueJugador);
				boton.disabled = true;
			} else {
				ataqueJugador.push('TIERRA');
				console.log(ataqueJugador);
				boton.disabled = true;
			}
		});
	});
}

function seleccionarMascotaEnemigo() {
	let mascotaAleatoria = aleatorio(0, mokepones.length - 1);

	spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
	secuenciaAtaque();
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
