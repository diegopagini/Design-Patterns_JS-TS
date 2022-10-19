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
	}
}
