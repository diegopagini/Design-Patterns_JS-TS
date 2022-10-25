/** @format */

class EncoderTextAbstraction {
	constructor(encoder) {
		this.encoder = encoder;
	}

	encode(str) {
		return this.encoder.encode(str);
	}

	decode(str) {
		return this.encoder.decode(str);
	}
}

class Base64EconderImplementor {
	encode(str) {
		return window.btoa(unescape(encodeURIComponent(str)));
	}

	decode(str) {
		return decodeURIComponent(escape(window.atob(str)));
	}
}

class HTMLEncoderImplementor {
	encode(str) {
		return str.split('.').reduce((acc, el) => {
			return acc + `<p>${el.trim()}</p>`;
		}, '');
	}

	decode(str) {
		return str.split('</p>').reduce((acc, el) => {
			return el !== '' ? acc + el.replace('<p>', '') + '. ' : acc + '';
		}, '');
	}
}

const encoder1 = new EncoderTextAbstraction(new Base64EconderImplementor());
console.log(encoder1.encode('pato')); // cGF0bw==
console.log(encoder1.decode('cGF0bw==')); // pato
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode('Esto es un texto. Y aqui comienza otro. Y aqui otro más')); // <p>Esto es un texto</p><p>Y aqui comienza otro</p><p>Y aqui otro más</p>
console.log(
	encoder2.decode('<p>Esto es un texto</p><p>Y aqui comienza otro</p><p>Y aqui otro más</p>')
); // Esto es un texto. Y aqui comienza otro. Y aqui otro más.
