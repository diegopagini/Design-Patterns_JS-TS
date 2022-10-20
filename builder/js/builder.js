/**
 *  @format
 *
 * Builder
 *
 */

class Person {
	constructor(name, lastName, age, country, city, hobbies) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.country = country;
		this.city = city;
		this.hobbies = hobbies;
	}

	getFullName() {
		return `${this.name} ${this.lastName}`;
	}
}

class PersonBuilder {
	constructor() {
		this.reset();
	}

	reset() {
		this.name = '';
		this.lastName = '';
		this.age = 0;
		this.country = '';
		this.city = '';
		this.hobbies = [];
	}

	setName(name) {
		this.name = name;
		return this; // Retorna el objeto construido con esta clase.
	}

	setLastName(lastName) {
		this.lastName = lastName;
		return this;
	}

	setAge(age) {
		this.age = age;
		return this;
	}

	setCountry(country) {
		this.country = country;
		return this;
	}

	setCity(city) {
		this.city = city;
		return this;
	}

	addHobby(hobby) {
		this.hobbies.push(hobby);
		return this;
	}

	build() {
		const person = new Person(
			this.name,
			this.lastName,
			this.age,
			this.country,
			this.city,
			this.hobbies
		);

		this.reset();
		return person;
	}
}

const personBuilder = new PersonBuilder();
const diego = personBuilder
	.setName('Diego')
	.setLastName('Pagini')
	.setAge(30)
	.setCountry('España')
	.setCity('Fuengirola')
	.addHobby('Programar')
	.build();
console.log({ diego });

const juan = personBuilder().setName('Juan').build();
console.log({ juan });
