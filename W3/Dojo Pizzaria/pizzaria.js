var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
//console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
//console.log(s1);


function pizzaOven(crustType, sauceType, cheeses, toppings){
    pizza={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza0 = pizzaOven("deep dish", "traditional", "[mozzarella]", "[pepperoni, sausage]");
console.log(pizza0);

var pizza1 = pizzaOven("hand tossed", "marinara", ["mozziralla", "fita"], ["mushromms", "olives", "onion"]);
console.log(pizza1);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];
//pick one random item from the array
function randompick(arr){
    var i= Math.floor(arr.length * Math.random());
    return arr[i];
}

//choose several items between range min-max.  ex.you can choose 1 to 4 different items from the array
function randomrange(max, min){
    return Math.floor(Math.random()*(max-min))+min; //decide how many items you will choose
}

function randomPizza(){
    var pizza={};
    pizza.crustTypes = randompick(crustTypes);
    pizza.sauceTypes = randompick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for (var i=0; i<randomrange(4, 1); i++) 
    //choose 1-4 cheeses for your pizza. function randomrange() decide how many cheese to be put into the pizza
    pizza.cheeses.push(randompick(cheeses));
    //for every time, pick one item for cheeses and push it to the pizza.cheese array
    for (var i=0; i<randomrange(5, 0); i++);
    pizza.toppings.push(randompick(toppings));
    return pizza;
}
console.log(randomPizza());