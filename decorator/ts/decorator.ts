/** @format */

interface Component {
	getDetail(): string;
}

class ProductComponent implements Component {
	protected name: string;

	constructor(name: string) {
		this.name = name;
	}

	getDetail(): string {
		return `${this.name}`;
	}
}

/**
 * Con la palabra abstact no se pueden crear objetos a partir de esa clase. Solo heredar.
 */
abstract class ProductDecorator implements Component {
	protected component: Component;

	constructor(component: Component) {
		this.component = component;
	}

	getDetail(): string {
		return this.component.getDetail();
	}
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
	private tradeName: string;
	private brand: string;

	constructor(component: Component, tradeName: string, brand: string) {
		super(component);
		this.tradeName = tradeName;
		this.brand = brand;
	}

	getDetail(): string {
		return `${this.tradeName} ${this.brand} ${super.getDetail()}`;
	}
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
	private price: number;

	constructor(component: Component, price: number) {
		super(component);
		this.price = price;
	}

	getDetail(): string {
		return `${super.getDetail()} ${this.price}`;
	}
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
	getDetail(): string {
		return `<h1>Información del producto</h1> <p>${super.getDetail()}</p>`;
	}
}

// Ejecución
// component
const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail()); // Cerveza

// decorator 1 con component
const commercialInfoProductDecorator = new CommercialInfoProductDecorator(
	productComponent,
	'London Porter',
	'Fullers'
);
console.log(commercialInfoProductDecorator.getDetail()); // London Porter Fullers Cerveza

// decorator 2 con component
const storeProductDecorator = new StoreProductDecorator(productComponent, 10.5);
console.log(storeProductDecorator.getDetail()); // Cerveza 10.5

// decorator 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProductDecorator, 25);
console.log(product.getDetail()); // London Porter Fullers Cerveza 25

// decorator 3 con decorator 2 con decorator 1
const htmlProduct = new HTMLProductDecorator(product);
console.log(htmlProduct.getDetail()); // <h1>Información del producto</h1> <p>London Porter Fullers Cerveza 25</p>
