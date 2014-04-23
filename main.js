// $(document).on('ready', function() {


var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

FoodItem.prototype.toString = function () {
	return this.name + ' has ' + this.calories + ' calories, ' + this.v() + ' , ' + this.g() + ' and ' + this.c() + '.';
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
	// return $('<div class="Restaurant">{name}</div>'.supplant(Restaurant));
};

Restaurant.prototype.toString = function () {
	return this.name + ' is ' + this.description + ' and is ' + FoodItem.vegan + ' which costs ' + this.price + ' dollars.';
};

var Menu = function (name, description, price) {
	// this.name = name;
	// this.description = description;
	// this.price = price;
	this.plates = [];
};

var Drink = function (name, description, price) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = [];
};

// var isVegan = function (a, b) {
// 	if (a && b === vegan) {
// 	return isVegan
// }

Drink.prototype.toString = function () {
	return this.name + ' is a ' + this.description + ' which costs ' + this.price + ' dollars.';
};

var Plate = function (name, description, price) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = [];
};

Plate.prototype.isVegan = function () {
	for (i = 0; i<ingredients.length; i++){
		if (ingredients[i].v === false) {
			return ;
		}
	}
}

Plate.prototype.toString = function () {
	return this.name + ' is ' + this.description + ' and is ' + this.vegan + ' which costs ' + this.price + ' dollars.';
};

var Order = function () {
	// this.plates = [];
};
console.log ('hi');

var Customer = function (dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};	


var butter = new FoodItem ('Butter', 470, true, false, false);
var wheat = new FoodItem ('Wheat', 500, false, false, true);
var orange = new FoodItem ('Orange', 600, false, false, true);

var margarita = new Drink ('margarita', 'mint and lime beverage', 10 );
var beer = new Drink ('beer', 'alcoholic beverage', 5);

var burrito = new Plate ('burrito', 'filled with steak and peppers', 5, []);
var guacamole = new Plate ('guacamole', 'made of avocados', 5, []);

var menu = [burrito, guacamole, margarita, beer];

var restaurant = menu;



margarita.ingredients.push(orange);
margarita.ingredients.push(butter);

beer.ingredients.push(wheat);


burrito.ingredients.push(butter);
burrito.ingredients.push(wheat);

guacamole.ingredients.push(orange);
guacamole.ingredients.push(wheat);


console.log (butter.toString());
console.log (wheat.toString());
console.log (orange.toString());

console.log (margarita.toString());
console.log (beer.toString());

console.log (burrito.toString());
console.log (guacamole.toString());

// });








