/** @format */

/**
 * Singleton pattern.
 * @example Dentro de la clase Singleton. Si llamamos a Singleton."algo" ese algo le pertenece a la clase, y es estático.
 * si llamamos a this."algo" eso le pertenece al objeto.
 */
class Singleton {
	constructor() {
		console.log('Entrando al constructor.');
		// Si existiriera devuelve ese mismo
		if (Singleton.instance) {
			console.log('Ya existe.');
			return Singleton.instance;
		}
		// Si no, lo crea.
		console.log('No existe y se crea.');
		// De esta forma siempre habra una sola instancia.
		Singleton.instance = this;
	}

	static getInstance() {
		return Singleton.instance;
	}
}

const singleton = new Singleton(); // Entrando al constructor. No existe y se crea.
const singleton2 = new Singleton(); // Entrando al constructor. Ya existe.
const singleton3 = Singleton.getInstance(); // Otra forma de instanciar el objeto. Y solo funcionará luego de crear un objeto.
console.log(singleton === singleton2); // true.
