/**
 * Contenido de la landing.
 *
 * Separado de los componentes: ellos son presentación pura y reciben esto por
 * props (AGENTS.md §5). Cambiar un texto no obliga a tocar ningún `.svelte`.
 */

export interface Step {
	readonly index: string;
	readonly title: string;
	readonly body: string;
}

export interface Phase {
	readonly label: string;
	readonly title: string;
	readonly body: string;
	/** Marca la fase en la que el asesinato puede irse al traste. */
	readonly danger?: boolean;
}

export interface Feature {
	readonly title: string;
	readonly body: string;
}

export interface QuestionAnswer {
	readonly question: string;
	readonly answer: string;
}

export const tagline = 'El battle royale que se juega con los pies.';

export const pitch =
	'Un objetivo asignado. Una zona real dibujada sobre tu ciudad. Cinco segundos ' +
	'de pulsación para ejecutar — y cualquiera que te vea puede impedirlo.';

export const stats: readonly Step[] = [
	{
		index: '200 m',
		title: 'Aproximación',
		body: 'El radio en el que tu víctima aparece en el mapa.'
	},
	{ index: '5 s', title: 'Ejecución', body: 'Lo que tardas en matar. Sin soltar el botón.' },
	{ index: '1', title: 'Superviviente', body: 'La rueda se cierra hasta que solo queda uno.' }
];

export const steps: readonly Step[] = [
	{
		index: '01',
		title: 'Alguien dibuja la zona',
		body: 'El anfitrión traza sobre el mapa el polígono donde se juega: un barrio, un campus, un festival. Fuera de ese perímetro no hay partida.'
	},
	{
		index: '02',
		title: 'Se cierra la rueda',
		body: 'Al arrancar, el servidor reparte los objetivos en un círculo cerrado. Cazas a uno. Otro te caza a ti. Nadie sabe quién.'
	},
	{
		index: '03',
		title: 'Sales a la calle',
		body: 'Tu única pista es la distancia. Cuando te acercas lo suficiente, su posición aparece. A partir de ahí es cuestión de nervio.'
	}
];

export const phases: readonly Phase[] = [
	{
		label: 'Fase 1',
		title: 'Aproximación',
		body: 'Entras en el radio de 200 metros. Recibes el aviso y la ubicación aproximada de tu víctima aparece en el mapa.'
	},
	{
		label: 'Fase 2',
		title: 'Aura de ejecución',
		body: 'La cercanía se confirma cruzando GPS, altitud y señal Bluetooth. Solo entonces aparece el botón. Estar en el mismo portal no basta si estás cuatro pisos más arriba.'
	},
	{
		label: 'Fase 3',
		title: 'El acto',
		body: 'Mantienes pulsado cinco segundos. Cinco segundos mirando a alguien que todavía no sabe que va a morir.'
	},
	{
		label: 'Fase 4',
		title: 'Testigos',
		body: 'Cualquier otro jugador dentro del aura recibe una alerta en ese instante. Si reacciona a tiempo, anula el asesinato y te penaliza con un cooldown.',
		danger: true
	},
	{
		label: 'Fase 5',
		title: 'Resolución',
		body: 'Si nadie interviene, la víctima cae y heredas su objetivo al momento. La rueda se estrecha.'
	}
];

export const features: readonly Feature[] = [
	{
		title: 'Geolocalización real',
		body: 'No hay joystick. La distancia que te separa de tu objetivo son metros de acera, cuestas y semáforos.'
	},
	{
		title: 'El servidor manda',
		body: 'Distancias, zona y muertes se calculan en PostGIS, no en tu teléfono. Falsear el GPS no te sirve de nada.'
	},
	{
		title: 'Nadie está a salvo',
		body: 'La rueda es circular y cerrada: mientras persigues a alguien, alguien te persigue a ti con la misma información que tú.'
	},
	{
		title: 'Matar en público es un riesgo',
		body: 'El sistema de testigos convierte cada ejecución en una decisión: hacerlo ya, o esperar a que se quede solo.'
	},
	{
		title: 'Identidad por partida',
		body: 'Eliges un nombre y un avatar exclusivos para cada partida. Lo que hagas ahí dentro no te sigue fuera.'
	},
	{
		title: 'Rankings',
		body: 'Los resultados alimentan clasificaciones nacionales y mundiales. La partida acaba; el historial no.'
	}
];

export const faq: readonly QuestionAnswer[] = [
	{
		question: '¿Tengo que tocar físicamente a alguien?',
		answer:
			'No. Killer se juega con el móvil en la mano y a distancia de metros. No hay contacto físico en ninguna mecánica: acercarse y mantener pulsado un botón es todo.'
	},
	{
		question: '¿Puedo hacer trampas con un GPS falso?',
		answer:
			'Lo pone difícil de forma deliberada. Ninguna distancia se calcula en el dispositivo: el servidor recalcula cada posición, valida la velocidad implícita entre lecturas y cruza la cercanía con Bluetooth antes de habilitar una ejecución.'
	},
	{
		question: '¿Qué pasa si me eliminan?',
		answer:
			'Sales de la partida y vuelves al menú. Tus kills se quedan en la clasificación de esa partida y suman en tu ranking global.'
	},
	{
		question: '¿Consume mucha batería?',
		answer:
			'Es un juego que lee el GPS de forma continua, así que sí. Las partidas están pensadas para durar lo que dura una tarde, no un fin de semana.'
	},
	{
		question: '¿Cuándo sale?',
		answer: 'Está en desarrollo. Primero Android; iOS después. No hay fecha pública todavía.'
	}
];
