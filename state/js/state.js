/**
 * @format
 *
 * State:
 *
 * El patrón de diseño State se utiliza cuando el comportamiento de un objeto cambia dependiendo del estado del mismo.
 * Por ejemplo: una alarma puede tener diferentes estados, como desactivada, activada, en configuración.
 */

class DocumentContext {
	constructor() {
		this.content = '';
		this.state = new BlankState();
	}

	setState(state) {
		this.state = state;
	}

	write(text) {
		this.state.write(this, text);
	}
}

class BlankState {
	write(documentContext, text) {
		documentContext.content = text;
		documentContext.setState(new WithContentState());
	}
}

class WithContentState {
	write(documentContext, text) {
		documentContext.content += ' ' + text;
	}
}

class ApprobedState {
	write(documentContext, text) {
		console.error('Documento aprobado, ya no se modifica');
	}
}

const doc = new DocumentContext();
console.log(doc.state);
doc.write('pato');
console.log(doc.content);
console.log(doc.state);
doc.write('algo');
doc.write('más');
console.log(doc.content);
console.log(doc.state);
doc.setState(new ApprobedState());
console.log(doc.state);
doc.write('Otra cosa');
