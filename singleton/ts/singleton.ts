/** @format */

/**
 * Singleton
 * @example los valores estáticos pertenecen a la clase
 */
class SingletonTS {
	private static instance: SingletonTS;
	random: number;

	private constructor() {
		this.random = Math.random();
	}

	static getInstance(): SingletonTS {
		if (!this.instance) {
			this.instance = new SingletonTS();
		}

		return this.instance;
	}
}

const singleton = SingletonTS.getInstance(); // No puedo crearlo con new SingletonTS() porque el constructor es privado.
const singleton2 = SingletonTS.getInstance();

console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton.random === singleton2.random); // true.

// Aunque se cambie el valor público seguiria siendo la misma instancia.
singleton.random = 10;

console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton.random === singleton2.random); // true.
