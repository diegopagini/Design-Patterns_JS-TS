/** @format */

interface IObserver<T> {
	next(value: T): void;
}

interface ISubject<T> {
	observers: IObserver<T>[];
	subscribe(observer: IObserver<T>): void;
	unsubscribe(observer: IObserver<T>): void;
	next(value: T): void;
}

class Subject<T> implements ISubject<T> {
	observers: IObserver<T>[];

	constructor() {
		this.observers = [];
	}

	subscribe(observer: IObserver<T>): void {
		this.observers.push(observer);
	}

	unsubscribe(observer: IObserver<T>): void {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	next(value: T): void {
		this.observers.forEach((obs: IObserver<T>) => {
			obs.next(value);
		});
	}
}

class Observer<T> implements IObserver<T> {
	private fn: (value: T) => void;

	constructor(fn: (value: T) => void) {
		this.fn = fn;
	}

	next(value: T): void {
		this.fn(value);
	}
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((n: number) => {
	console.log(`Number: ${n}`);
});
const obs2 = new Observer<number>((n: number) => {
	console.log(`Number: ${n * 10}`);
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.next(1.2); // Number: 1.2 // Number 12
subject.next(20); // Number: 20 // Number 200

const subjectString = new Subject<string>();
const obs1String = new Observer<string>((value: string) => {
	console.log(value.toLocaleUpperCase());
});
const obs2String = new Observer<string>((value: string) => {
	console.log(value.toLocaleLowerCase());
});

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);

subjectString.next('Hello World'); // HELLO WORLD // hello world
