/**
 * @format
 *
 * Strategy Example
 */
const data = [
	{
		name: 'Erdinger Pikantus',
		country: 'Alemania',
		info: 'Esta cerveza de trigo tiene un contenido de alcohol alto y debe su sabor fuerte y completo a la utilización de trigo oscuro seleccionado y maltas de cebada y a ...',
		img: 'https://birrapedia.com/img/modulos/cerveza/8dc/cerveza-erdinger-pikantus_14458806492307_t.jpg',
	},
	{
		name: 'Corona',
		country: 'Mexico',
		info: 'Corona es el nombre de una marca de cerveza mexicana fundada en 1926 muy popular en todo el mundo,​elaborada por el Grupo Modelo, que a su vez forma parte ...',
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Corona-6Pack.JPG/230px-Corona-6Pack.JPG',
	},
	{
		name: 'Delirium Tremens',
		country: 'Bélgica',
		info: 'Es una cerveza que rápidamente se ha impuesto como una gran referencia belga, conquistando a todo el mundo en menos de 10 años. El color rosa de la etiqueta ...',
		img: 'https://cdn2.yopongoelhielo.com/1649-home_default/pack-delirium-tremens-2-botellas-copa.jpg',
	},
];

// HTML references
const content = document.querySelector('#content');
const select = document.querySelector('#slcOptions');

class InfoContext {
	constructor(strategy, data, element) {
		this.setStrategy(strategy);
		this.data = data;
		this.element = element;
	}

	setStrategy(strategy) {
		this.strategy = strategy;
	}

	show() {
		this.strategy.show(this.data, this.element);
	}
}

class ListStrategy {
	show(data, element) {
		element.innerHTML = data.reduce((acc, el) => {
			return (
				acc +
				`<div>
          <h2>${el.name}</h2>
          <p>${el.country}</p>
        </div>
      <hr>`
			);
		}, '');
	}
}

class DetailedListStrategy {
	show(data, element) {
		element.innerHTML = data.reduce((acc, el) => {
			return (
				acc +
				`<div>
          <h2>${el.name}</h2>
          <p>${el.country}</p>
          <p>${el.info}</p>
        </div>
      <hr>`
			);
		}, '');
	}
}

class ListWithImagesStrategy {
	show(data, element) {
		element.innerHTML = data.reduce((acc, el) => {
			return (
				acc +
				`<div>
          <img width="100px" src=${el.img} >
        </div>
      <hr>`
			);
		}, '');
	}
}

const strategies = [new ListStrategy(), new DetailedListStrategy(), new ListWithImagesStrategy()];

// const info = new InfoContext(new ListStrategy(), data, content);
// info.show();

const info = new InfoContext(new DetailedListStrategy(), data, content);
// info.show();

select.addEventListener('change', (event) => {
	const option = event.target.value;

	info.setStrategy(strategies[option]);
	info.show();
});
