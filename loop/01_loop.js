var array = [1, 2, 4, 5, 6, "shivam", true, "gourve"];

var temp = [];
//simple for loop
//create a reverse of  array
for (var i = array.length - 1; i >= 0; i--) {
  temp.push(array[i]);
}

console.log(temp);

const myStates = ["Delhi", "Rajasthan", "uter pradas", "Assam", "Tamil Nadu"];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") continue;
  console.log(myStates[i]);
}

let s = 0;
while (s < myStates.length) {
  console.log(myStates[s]);
  s++;
}
