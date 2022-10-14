/**
 * @format
 *
 *
 * Singleton Example.
 *
 */
class WeekDays {
	daysEs = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
	daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	constructor(lang) {
		this.lang = lang;

		if (WeekDays.instance) {
			return WeekDays.instance;
		}

		WeekDays.instance = this;
	}

	getDays() {
		return this.lang === 'es' ? this.daysEs : this.daysEn;
	}
}

const weekDays = new WeekDays('en');
const weekDays2 = new WeekDays(); // Ya no hace falta la configuración inicial.
const weekDays3 = new WeekDays('es'); // No lo toma en cuenta

console.log(weekDays.getDays()); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(weekDays2.getDays()); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(weekDays3.getDays()); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
