//////// TESTING STUFF
//////// TO BE REMOVED IN A LATER LECTURE

//const Person = require('./modules/Person');
import Person from './modules/Person';

const person1 = new Person('Mistah Frodo');
person1.greet();

class TaxPayer extends Person {
  payTaxes () {
    console.log(`${this.name} is now a slave to the system.`);
  }
}

const person2 = new TaxPayer('Uncle Baggins');
person2.greet();
person2.payTaxes();
