var $ = require('jquery');

// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes million");
	}
}

alert("This is warnings!");

var john = new Person('john');
john.greet();

var jane = new Adult('jane');
jane.greet();
jane.payTaxes();

$("h1").remove();