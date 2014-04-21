var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
// return (this.name + 'has ' this.calories + 'and' + v + 'and' + g + 'and' + c '.');
};

console.log(FoodItem.name);

var v = function() {
	if(this.vegan === true){
		return "is vegan";
	}

	else {
		return "is not vegan";
	}
}
console.log(this.vegan);
var g = function() {
	if(this.glutenFree === true){
		return "is gluten free";
	}

	else {
		return "is not gluten free";
	}
}
console.log(g);
var c = function() {
	if(this.citrusFree === true){
		return "is citrus free";
	}

	else {
		return "is not citrus free";
	}
}
console.log(c);

var pasta = new FoodItem ('Pasta', 470, true, false, false);
var pizza = new FoodItem ('Pizza', 500, false, false, true);
var burger = new FoodItem ('Burger', 600, false, false, true);

// pasta.toString();
// pizza.toString();
// burger.toString();

// return (FoodItem.name + 'has ' FoodItem.calories + 'and' + v + 'and' + g + 'and' + c '.');

// FoodItem.prototype.toString = function FoodItemToString() {
//   var ret = "Dog " + this.name + " is a " + this.calories + " " + this.vegan + " " + this.glutenFree;
//   console.log (ret);
// }





