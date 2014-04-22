var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;

};

FoodItem.prototype.v = function() {
	if(this.vegan === true){
		return "is vegan";
	}

	else {
		return "is not vegan";
	}
}

FoodItem.prototype.g = function() {
	if(this.glutenFree === true){
		return "is gluten free";
	}

	else {
		return "is not gluten free";
	}
}

FoodItem.prototype.c = function() {
	if(this.citrusFree === true){
		return "is citrus free";
	}

	else {
		return "is not citrus free";
	}
}

var Restaurant = function (name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};
console.log ('hi');

var Menu = function (name, description, price) {
	// this.name = name;
	// this.description = description;
	// this.price = price;
	this.plates = [];
};
console.log ('hi');

var Drink = function (name, description, price) {
	this.name = name;
	this.description = description;
	this.price = price;
	// Menu.call(name, description, price);
	// this.ingredients = [];
};
// Drink.prototype = new Menu();
// Drink.prototype.constructor = Drink;

var Plate = function (name, description, price) {
	this.name = name;
	this.description = description;
	this.price = price;
	// Menu.call(name, description, price);
	this.ingredients = [];
};
// Plate.prototype = new Menu();
// Plate.prototype.constructor = Plate;
console.log ('hi');

var Order = function () {
	// this.plates = [];
};
console.log ('hi');

var Customer = function (dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};	
console.log ('hi');


var butter = new FoodItem ('Butter', 470, true, false, false);
var wheat = new FoodItem ('Wheat', 500, false, false, true);
var orange = new FoodItem ('Orange', 600, false, false, true);

var margarita = new Drink ('margarita', 'mint and lime beverage', 10 );
var beer = new Drink ('beer', 'alcoholic beverage', 5);

var burrito = new Plate ('burrito', 'filled with steak and peppers', 5, []);
var guacamole = new Plate ('guacamole', 'made of avocados', 5, []);

var menu = [burrito, guacamole, margarita, beer];

var restaurant = menu;

FoodItem.prototype.toString = function () {
	return this.name + ' has ' + this.calories + ' calories, ' + this.v() + ' , ' + this.g() + ' and ' + this.c() + '.';

};

Drink.prototype.toString = function () {
	return this.name + ' is a ' + this.description + ' which costs ' + this.price + ' dollars.';
};

Plate.prototype.toString = function () {
	return this.name + ' is ' + this.description + ' and is ' + FoodItem.vegan + ' which costs ' + this.price + ' dollars.';
};

Restaurant.prototype.toString = function () {
	return this.name + ' is ' + this.description + ' and is ' + FoodItem.vegan + ' which costs ' + this.price + ' dollars.';
};


console.log (butter.toString());
console.log (wheat.toString());
console.log (orange.toString());

console.log (margarita.toString());
console.log (beer.toString());

console.log (burrito.toString());
console.log (guacamole.toString());












