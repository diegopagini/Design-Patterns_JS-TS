/** @format */

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

class ItemSubject extends Subject {
	constructor() {
		super();

		this.data = [];
	}

	add(item) {
		this.data.push(item);
		this.notify(this.data);
	}
}

class HtmlElementObserver {
	constructor(element) {
		this.element = element;
	}

	refresh(data) {
		this.element.innerHTML = data.reduce((acc, el) => {
			return acc + `<p>${el}</p>`;
		}, '');
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

const items = new ItemSubject();
const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);
const div3Observer = new Observer((data) => {
	div3.innerHTML = data.length;
});

items.subscribe(div1Observer);
items.subscribe(div2Observer);
items.subscribe(div3Observer);

const add = () => {
	const name = txtName.value;
	items.add(name);
};
