class Person {
  constructort(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log('hello ' + this.name);
  }
}

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

const bob = new Person('Bob', 23);
console.log(bob.hello());
