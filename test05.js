function Animal(name) {
	this.name = name;
}

Animal.prototype.Talk = function() {
	document.writeln("나의 이름은 " + this.name + "야 <br>");
}

var monkey = new Animal("원숭이");
var bird = new Animal("새");

monkey.Talk();
bird.Talk();
