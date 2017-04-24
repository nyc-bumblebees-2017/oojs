var Dog = function(args){
	this.name = args.name || "Sunshine";
	this.age = args.age;
	this.breed = args.breed;
	// this.bark = function(){
	// 	return "bark";
	// }
}

Dog.prototype.bark = function(){
	return "bark";
}

var dog_vars = { age: "10", breed: "Pugle"}
var dog = new Dog(dog_vars)
console.log(dog.bark())