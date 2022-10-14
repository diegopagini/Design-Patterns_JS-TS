/** @format */

class Beverage {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	info(): string {
		return this.name;
	}
}

const berevage = new Beverage('Beer');
console.log(berevage.info());

// Interfaces
interface Product {
	price: number;
	getPrice(): string;
}

class Beverage2 extends Beverage implements Product {
	private alcohol: number;
	price: number;

	constructor(name: string, alcohol: number, price: number) {
		super(name);
		this.alcohol = alcohol;
		this.price = price;
	}

	info(): string {
		return super.info() + ` y tiene ${this.alcohol} de alcohol.`;
	}

	getPrice(): string {
		return `$ ${this.price}`;
	}
}

const beravage2 = new Beverage2('Beer', 5.7, 10);
console.log(beravage2.info());

class Snack implements Product {
	name: string;
	price: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}

	getPrice(): string {
		return `$ ${this.price}`;
	}
}

const snack = new Snack('Patatas', 5);

const products: Product[] = [
	{
		price: 10,
		getPrice: () => '20',
	},
	new Snack('patatas', 15),
];

console.log(products);

const getPrices = (items: Product[]) => {
	for (const item of items) {
		console.log(item.getPrice());
	}
};

getPrices(products);
