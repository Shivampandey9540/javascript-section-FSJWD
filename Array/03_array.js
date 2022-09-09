// DESTURCTURING and spread
let arrayone = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arrayone;
console.log(c);

let fullstack = [
  ["html", "css", "js", "tailwind"],
  ["nodejs", "express", "mongodb"],
];

let [frontend, backend] = fullstack;

console.log(frontend);

//by using this it is only storing the 1, 3, 5

let [k, , l, , m] = arrayone;

console.log(m);

// spread : - destructing the array
let ArryaOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [q, w, ...rest] = ArryaOne;
console.log(rest);

function sum(x, y) {
  return x + y;
}
let vari = [5, 6];
console.log(sum(vari[0], vari[1]));

console.log(sum(...vari));

//REST-- creating  an array

function sum(...args) {
  console.log(args);
  let sum = 0;
  for (let a of args) {
    sum = sum + a;
  }
  return sum;
}

console.log(sum(1, 2, 3, 5, 6));

let test;

function create(...ar) {
  return ar;
}

test = create(1, 2, 4, 5);

console.log(test);

// let person = new Object();

// person.name = "shivam";

// console.log(person);

var person = function (firstname, coursecount) {
  this.firstname = firstname;
  this.coursecount = coursecount;
};
console.log(typeof person);

function tail() {
  console.log("hi");
}
console.log(typeof tail);

var shivam = new person("Shivam", 8);

console.log(shivam);
var gourve = new person("gourve", 9);
console.log(gourve);

//Set and map in javascript

//set :- set is collection of element which store the unique elements

let A = [1, 3, 4, 1, 4, 5, 7, 8, 9, 9, 9, 9, 11, 44];
let num = new Set(A);
console.log(num);

for (let i of num) {
  console.log(i);
}

num.has(13);
console.log(num.has(13));
console.log(num.add(16));
num.clear();
console.log(num.size);

// Maps
//Maps can hold key value pair and key can be any data type

let newMap = new Map();

console.log(newMap.size);

newMap.set("1", "one");
newMap.set(1, "one");
newMap.set(true, "one");

console.log(newMap.size);

console.log(newMap);
console.log(newMap.get("1"));

// object : {1:"shivam"}

// set : {1,2,3, 4, 5}

// Map : {1' => 'one', 1 => 'one', true => 'one'}

let city = [
  ["India", " Delhi"],
  ["Gugjarat", "Surat"],
  ["Rajesthan", "jaipur"],
];

let NEWmap = new Map(city);
console.log(NEWmap);

for (let [key, value] of NEWmap) {
  console.log(NEWmap.get(key));
}

for (let key in NEWmap) {
  console.log(NEWmap.get(key), "hi");
}

//closuer :- This is the easyest thing in javascript

//defineation:- when a inner function access value of outer function they are called as closuer

function outer() {
  let closure = "seven";
  function inner() {
    console.log(closure);
  }
  inner();
}

outer();

let testt = outerr();
testt();

function outerr() {
  let closure = "seven";
  function innerr() {
    console.log(closure);
  }
  return innerr;
}

// let testt = outerr();

// testt();
