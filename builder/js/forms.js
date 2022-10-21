/** @format */

class Form {
	constructor(controls, action) {
		this.controls = controls;
		this.action = action;
	}

	getContent() {
		return `<form method="post" action="${this.action}" >
            ${this.controls.reduce((acc, control) => {
							return (
								acc +
								`<div>
                ${this.getLabel(control)}
                ${this.getInput(control)}
              </div>
              `
							);
						}, '')}
            <button type="submit">Enviar</button>
            </form>
    `;
	}

	getLabel(control) {
		return `<label>${control.text}</label>`;
	}

	getInput(control) {
		return `<input type="${control.type}" id="${control.name}" name="${control.name}" />`;
	}
}

class FormBuilder {
	constructor() {
		this.reset();
	}

	setAction(action) {
		this.action = action;
		return this;
	}

	reset() {
		this.action = '';
		this.controls = [];
	}

	setText(name, text) {
		this.controls.push({
			name,
			text,
			type: 'text',
		});

		return this;
	}

	setEmail(name, text) {
		this.controls.push({
			name,
			text,
			type: 'email',
		});

		return this;
	}

	setCheckBox(name, text) {
		this.controls.push({
			name,
			text,
			type: 'checkbox',
		});

		return this;
	}

	setColor(name, text) {
		this.controls.push({
			name,
			text,
			type: 'color',
		});

		return this;
	}

	build() {
		const form = new Form(this.controls, this.action);
		this.reset();
		return form;
	}
}

const formBuilder = new FormBuilder();
const formPeople = formBuilder
	.setAction('add.php')
	.setText('firstName', 'Nombre')
	.setText('lastName', 'Apellido')
	.setEmail('email', 'Email')
	.setCheckBox('drinker', 'Te gusta beber?')
	.setColor('color', 'Color')
	.build();

console.log(formPeople);

form1.innerHTML = formPeople.getContent();

const formEmail = formBuilder
	.setAction('send.php')
	.setEmail('email', 'Email')
	.setText('name', 'Name')
	.build();

form2.innerHTML = formEmail.getContent();
