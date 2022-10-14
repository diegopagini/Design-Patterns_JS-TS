/** @format */

/**
 * Función de primer orden.
 * Es toda función que pueda ser tratada como una variable.
 */
function sum(a, b) {
	return a + b;
}

let res = sum(1, 2);
console.log({ res });

// Asignar la función a una variable.
const fSum = sum;
res = fSum(5, 6);
console.log({ res });

/**
 * Función de orden superior:
 * Es toda función que puede recibir en parámetros funciones.
 */
function operation(fn, a, b) {
	console.log('something is done');
	console.log(fn(a, b));
}

// Ejemplo:
operation(sum, 10, 11);

// Arrow function
const fa = () => console.log('something is done');

fa();

operation((a, b) => a * b, 10, 11);

operation(
	(a, b) => {
		const c = a + b;
		return c;
	},
	1,
	2
);

// forEach - inmutable.
const names = ['Juan', 'Pepe', 'Manolo', 'Ana'];
// Función de orden superior.
names.forEach((name) => {
	// (name) => {} funcion de primer orden.
	console.log({ name });
});

// sort - mutable
names.sort();
console.log(names);
