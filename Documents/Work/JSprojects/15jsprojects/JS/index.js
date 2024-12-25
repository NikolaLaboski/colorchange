/* ARRAYS, ARRAY METHODS, SORTING, ITERATION */

// define an array
const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function arr() {
  return dataArr;
}
document.getElementById("demo").innerHTML = dataArr;

// First we'll code methods for adding, removing and joining array elements
// join() method - joins all array elements into a string
function joinArr() {
  return dataArr.join("*");
}
document.getElementById("demo1").innerHTML = joinArr(dataArr);

// pop() method - removes the last element from an array and returns that element
function popArr() {
  let poppedOut = dataArr.pop();
  return poppedOut;
}
document.getElementById("demo2").innerHTML = popArr(dataArr);

/* push() method adds one or more elements to the end of the array and returns 
the new length of the array*/
const fruits = [
  "banana",
  "apple",
  "Orange",
  "Mango",
  "Grape",
  "Peach",
  "Olive",
  "Raspberry",
  "Mulberry",
];

document.getElementById("demo3").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo4").innerHTML = fruits;

// shift() removes the first element from an array
function fruitsShift() {
  let shifted = fruits.shift();
  return shifted;
}
document.getElementById("demo5").innerHTML = fruits;

// unshift() method adds an element at the beginning of the array

/* splice() - remove/add any number of consecutive elements from anywhere
in the array. First parameter represents the index of the array from which
to begin removing, while the second parameter indicates the number of
elements to delete. Modifies the array it's being called on, but it also
returns a new array containing the value of the removed elements */

/* slice() - slices out a piece of an array containing the value of the removed 
elements. Rather than modifying an array, slice copies or extracts a given 
number of elements. Can take one or two parameters, if it takes one 
slices out a part of an array starting from array element (parameter).
If it takes two parameters, first is the index at which to begin 
extraction and the second is the index at which to stop extraction
(extraction will occur up to, but not including the element at this index) */

/* sort - sorts the items of an array in a specific order 
(ascending or descending)*/

/* reverse() - reverses the elements in an array. You can use it to sort 
an array in descending order */

// click the buttons to sort the array alphabetically and numerically

// sort in random order

/* foreach() - calls a function (a callback function) once for each 
array element*/

/* map() - creates a new array with the results of calling a function
for every array element. Does not change the original array */

/* filter() - returns a new array filled with elements that pass a test */

/* reduce() - executes a reducer function on each array element and returns
a single element */

/* OBJECTS */

// Create an object - iterate over object by name property
const car = {
  brand: "Ford",
  model: "Mondeo",
  year: 2016,
};
document.getElementById("obj1").innerHTML =
  car.brand + " " + car.model + " " + car.year;
// Add, modify, remove properties, Add method
const carTwo = {
  brand: "Peugeut",
  model: "307",
  price: 3500,
};
carTwo.info = function () {
  return (
    "The car is " + this.brand + " " + this.model + " and is worth " + car.price
  );
};
document.getElementById("obj2").innerHTML = carTwo.info();

// Display objects - iterate over object (for...in loop, JSON.stringify, Object.values)
let displayCar = " ";
const myCar3 = {
  brand: "Mercedez Benz",
  model: "e220",
  price: "11000$",
};

for (let car in myCar3) {
  displayCar += myCar3[car] + " ";
}
document.getElementById("obj3").innerHTML = displayCar;

/* Objects.values() -  It is used to extract the values of an 
object's own enumerable properties and return them as an array. 
This method provides a convenient way to work with object values when you don't need the property names. */
let users = {
  name: "Nick",
  name1: "Nicky",
};

function someFunction(object1) {
  return Object.values(object1);
}
document.getElementById("obj4").innerHTML = someFunction(users);

// display objects with stringify
let newWay = JSON.stringify(users);
document.getElementById("obj5").innerHTML = newWay;

// access nested objects
const accessNested = {
  food: "Pizza",
  drink: "Wine",
  foodIngredients: {
    meat: "Salami",
    vegetables: "peppers",
    fruits: "pineaple",
  },
};
document.getElementById("obj6").innerHTML = accessNested.foodIngredients.meat;

function accessNest() {
  let displayFood = "";
  const food = {
    pizza: "Napolitana",
    wine: "Chardone",
    pizzaIngredients: {
      meat: "bacon",
      vegetables: "olives",
      fruits: "ananas",
    },
  };

  for (let eat in food.pizzaIngredients) {
    displayFood += food.pizzaIngredients[eat] + " ";
  }

  return displayFood;
}
document.getElementById("obj7").innerHTML = accessNest();

/* loop through the object passed into the function and return the number of users
whose online property is set to true
*/

function loopThrough() {
  const onlineProperty = {
    Alen: {
      online: true,
    },
    DeclanRice: {
      online: false,
    },
    AdrianMiftari: {
      online: false,
    },
  };
  let display = "";
  for (let i in onlineProperty) {
    if (onlineProperty[i].online === false) {
      display += onlineProperty[i].online + " ";
    }
  }
  return display;
}
document.getElementById("obj8").innerHTML = loopThrough();

function cars(carsEx) {
  let displayDrive = " ";
  for (let drive in carsEx) {
    if (carsEx[drive].online === true) {
      displayDrive += carsEx[drive].online + " ";
    }
  }
  return displayDrive;
}
const carsExample = {
  Alen: {
    online: true,
  },
  DeclanRice: {
    online: false,
  },
  AdrianMiftari: {
    online: false,
  },
};
document.getElementById("obj9").innerHTML = cars(carsExample);
/* Object.assign() method is used to copy the values of all enumerable own 
properties from one or more source objects to a target object. 
It will return the target object.
-target: the target object - what to apply, the sources properties to which is
returned after it is modified.
-sources: the source object(s) - objects containing the properties 
you want to apply.
So, object.assign() is used for cloning an object, to merge object with same properties.
*/

/* Object.keys() method returns an array of a given object's own enumerable 
property names, in the same order as we get a normal loop */

// Object accessors set a property using set
// Object accessors get the value of the property
// Access object data using a getter
// Constructor function for objects, Create two person objects, display age

// Object Prototypes
