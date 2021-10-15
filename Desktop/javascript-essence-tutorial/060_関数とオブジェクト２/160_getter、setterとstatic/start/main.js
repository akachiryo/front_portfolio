function Person1(name, age) {
	this._name = name;
	this.age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
	get: function(){
		return this._name;
	},
	set: function(val) {
		this._name = val;
	}
});

const p1 = new Person1('Bob', 23);
console.log(p1.name)

p1.name = 'tom'
console.log(p1.name)

class Person2 {
	constructor(name, age) {
		this._name = name;
		this.age = age;
	}

	get name(){
	return this._name;
 }
	set name(val) {
		this._name = val;
 }

 static hello() {
	 console.log('hello')
 }
}

Person2.hello();