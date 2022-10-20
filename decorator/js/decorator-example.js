/** @format */

class ClientComponent {
	constructor(url) {
		this.url = url;
	}

	async getData() {
		const res = await fetch(this.url);
		const data = await res.json();

		return data;
	}
}

// decorator
class ClientDecorator {
	constructor(clientComponent) {
		this.clientComponent = clientComponent;
	}

	async getData() {
		return await this.clientComponent.getData();
	}
}

// decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
	async getData() {
		const data = await super.getData();
		return data.map((value) => {
			value.title = value.title.toUpperCase();
			return value;
		});
	}
}

// decorator 2
class HtmlClientDecorator extends ClientDecorator {
	async getData() {
		const data = await super.getData();
		return data.map((value) => {
			value.title = `<h1>${value.title}</h1>`;
			value.thumbnailUrl = `<img src='${value.thumbnailUrl}' >`;

			return value;
		});
	}
}

(async () => {
	const url = 'https://jsonplaceholder.typicode.com/photos';
	const client = new ClientComponent(url);
	const data = await client.getData();
	// console.log(data);

	const upperClient = new UpperCaseClientDecorator(client);
	const data2 = await upperClient.getData();
	// console.log(data2);

	const htmlClient = new HtmlClientDecorator(upperClient);
	const data3 = await htmlClient.getData();
	content1.innerHTML = data3.reduce((acc, el) => {
		return acc + el.title + el.thumbnailUrl;
	}, '');

	const htmlClient2 = new HtmlClientDecorator(client);
	const data4 = await htmlClient2.getData();
	content2.innerHTML = data4.reduce((acc, el) => {
		return acc + el.title + el.thumbnailUrl;
	}, '');
})();
