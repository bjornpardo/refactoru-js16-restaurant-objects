
/*********************************
 * CLASS DEFINITIONS
 *********************************/

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

FoodItem.prototype.toString = function () {
	return this.name + ' has ' + this.calories + ' calories, ' + this.isVegan() + ' , ' + this.isGlutenFree() + ' and ' + this.isCitrusFree() + '.';
};


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


Drink.prototype.toString = function () {
	return this.name + ' is a ' + this.description + ' which costs ' + this.price + ' dollars.';
};

var Plate = function (name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

Plate.prototype.isVegan = function () {
	for ( var i = 0; i<this.ingredients.length; i++){
		if (this.ingredients[i].vegan === false) {
			return "is vegan";
		}
	}	
			return "is not vegan";
};

Plate.prototype.isCitrusFree = function () {
	for ( var i = 0; i<this.ingredients.length; i++) {
		if (this.ingredients[i].citrusFree === false) {
			return "is not citrus free";
		}
	}
			return "is citrus free";
};

Plate.prototype.isGlutenFree = function () {
	for ( var i = 0; i<this.ingredients.length; i++){
		if (this.ingredients[i].glutenFree === false) {
			return "is not gluten free";
		}
	}
			return "is gluten free";
};		

Plate.prototype.toString = function () {
	return this.name + ' is ' + this.description + ' and ' + this.isVegan() + ' ' + this.isCitrusFree() + ' ' + this.isGlutenFree() + ' which costs ' + this.price + ' dollars.';
};

var Order = function () {
	// this.plates = [];
};

var Customer = function (dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};	


var butter = new FoodItem ('Butter', 470, true, false, false);
var wheat = new FoodItem ('Wheat', 500, false, false, true);
var orange = new FoodItem ('Orange', 600, false, false, true);
var beans = new FoodItem ('Beans', 100, true, true, true);
var rice = new FoodItem ('Rice', 50, true, true, true);


var margarita = new Drink ('margarita', 'mint and lime beverage', 10 );
var beer = new Drink ('beer', 'alcoholic beverage', 5);

var burrito = new Plate ('burrito', 'filled with steak and peppers', 5, []);
var guacamole = new Plate ('guacamole', 'made of avocados', 5, []);

var menu = new Menu ([burrito, guacamole, margarita, beer]);

var restaurant = menu;

margarita.ingredients.push(orange);
margarita.ingredients.push(butter);

beer.ingredients.push(wheat);


burrito.ingredients.push(butter);
burrito.ingredients.push(wheat);
burrito.ingredients.push(rice);


guacamole.ingredients.push(orange);
guacamole.ingredients.push(wheat);
guacamole.ingredients.push(beans);



console.log (butter.toString());
console.log (wheat.toString());
console.log (orange.toString());

console.log (margarita.toString());
console.log (beer.toString());

console.log (burrito.toString());
console.log (guacamole.toString());


/*********************************
 * UI
 *********************************/

 $(document).on('ready', function() {

	// var outerShell = $('<div class="outer-shell"></div>');
	// var innerShell = $('<div class="inner-shell"></div>');
	// var AmPmLabel = $('<div class="am-pm">PM</div>');
	// var AutoLabel = $('<div class="auto">AUTO</div>');
	// var clockScreen = $('<div class="clock-screen"></div>');
	// var indicator = $('<div class="indicator"></div>');
	// var clockText = $('<div class="clock-text">12:17</div>');


});








