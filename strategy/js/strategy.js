/**
 * @format
 * Strategy
 * El patrón de estrategia sugiere que tome una clase que haga algo específico de muchas maneras diferentes
 * y extraiga todos estos algoritmos en clases separadas llamadas estrategias.
 * La clase original, llamada contexto, debe tener un campo para almacenar una referencia a una de las estrategias.
 * El contexto delega el trabajo a un objeto de estrategia vinculado en lugar de ejecutarlo por sí solo.
 */
class SalesContext {
	constructor(strategy) {
		this.strategy = strategy;
	}

	calculate(amount) {
		return this.strategy.calculate(amount);
	}
}

class RegularSaleStrategy {
	constructor(tax) {
		this.tax = tax;
	}

	calculate(amount) {
		return amount + amount * this.tax;
	}
}

class DiscountSaleStrategy {
	constructor(tax, discount) {
		this.tax = tax;
		this.discount = discount;
	}

	calculate(amount) {
		return amount + amount * this.tax - this.discount;
	}
}

const regularSale = new RegularSaleStrategy(0.21);
let sale = new SalesContext(regularSale);
console.log(sale.calculate(10)); // 12.1

const discountSale = new DiscountSaleStrategy(0.21, 3);
sale = new SalesContext(discountSale);
console.log(sale.calculate(10)); // 9.1

// Forma fácil de evitar el uso de swtich case.
