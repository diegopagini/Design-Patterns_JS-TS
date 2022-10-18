/** @format */

/**
 * Observer.
 * Es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos,
 * de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.
 */

class Subject {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	notify(data) {
		this.observers.forEach((el) => {
			el.refresh(data);
		});
	}
}

class Observer {
	constructor(fn) {
		this.fn = fn;
	}

	refresh(data) {
		this.fn(data);
	}
}

const subject = new Subject();
const obs1 = new Observer((data) => {
	console.log(`Soy el obs 1 con esta data: ${data}`);
});
const obs2 = new Observer((data) => {
	div1.innerHTML = data;
});

const obs3 = new Observer((data) => {
	div2.innerHTML = data.split('').reverse().join('');
});

subject.subscribe(obs1); // consola
subject.subscribe(obs2); // div1
subject.subscribe(obs3); // div2

const change = () => {
	// cuando un cambio se efectúa se refleja en todos los obsevables a los que este subscrito el subject.
	subject.notify(myText.value);
};
