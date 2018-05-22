function Person (name) {
  this.name = name;
  this.greet = () => {
    console.log(`Sup, diz is ${this.name}.`);
  };
}

module.exports = Person;
