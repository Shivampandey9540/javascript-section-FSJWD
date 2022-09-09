var contries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Delhi", "Rajasthan", "Utar Pradas", "mumbai");

console.log(states[1]);

console.log(states.length);

for (var i = 0; i < states.length; i++) {
  console.log(states[i]);
}

states.push("Assam");

console.log(states);

states.pop();

//unshift is use to add value at the start
states.unshift("shivam");
console.log(states);

states.shift(2);
console.log(states);

console.log(states.indexOf("Rajasthan"));

console.log(Array.from("shivam"));
