// What is an arrray  ?
var arr1 = [10, "jack", true, "sam"];
//empty array2
var arr2 = [];

// arr1.forEach((element) => {
//   if (typeof element == "string") {
//     arr2.push(element);
//   } else {
//     console.log(` ${element} + There is not a string`);
//   }
// });

// console.log(arr2);

for (var i = 0; i < arr1.length; i++) {
  // what is type of array
  // s
  //checking whether it is string or not
  if (typeof arr1[i] === "string") {
    // element in the array
    console.log(arr1[i]);
    arr2.push(arr1[i]);
  } else {
    // console.log(arr1[i]);
  }
}

console.log(arr2);
