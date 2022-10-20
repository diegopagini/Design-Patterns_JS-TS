/**
 * @format
 *
 * Decorator
 *
 * El patrón Decorator responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto.
 * Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad,
 * sino otras que la implementan y se asocian a la primera.
 */

// component
class ProductComponent {
	constructor(name) {
		this.name = name;
	}

	getDetail() {
		return `${this.name}`;
	}
}

// decorator
class ProductDecorator {
	constructor(productComponent) {
		this.productComponent = productComponent;
	}

	getDetail() {
		return this.productComponent.getDetail();
	}
}

// decorator 1
class CommerciLInfoProductDecorator extends ProductDecorator {
	constructor(productComponent, tradeName, brand) {
		super(productComponent);
		this.tradeName = tradeName;
		this.brand = brand;
	}

	getDetail() {
		return `${this.tradeName} ${this.brand} ${super.getDetail()}`;
	}
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
	constructor(productComponent, price) {
		super(productComponent);
		this.price = price;
	}

	getDetail() {
		return `${super.getDetail()} price: ${this.price}`;
	}
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
	getDetail() {
		return `<h1>Información del producto</h1>
      <p>${super.getDetail()}</p>
    `;
	}
}

const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

// decorator 1 con component
const commercialInfoProduct = new CommerciLInfoProductDecorator(
	productComponent,
	'London Porter',
	'Fullers'
);
console.log(commercialInfoProduct.getDetail());

// decorator 2 con component
const storeProductComponent = new StoreProductDecorator(productComponent, 10.25);
console.log(storeProductComponent.getDetail());

// decorator 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(product.getDetail());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
console.log(htmlProductDecorator.getDetail());
myDiv.innerHTML = htmlProductDecorator.getDetail();
