function isEven(element) {
  //   if (element % 2 === 0) {
  //     console.log(`${element} is even`);
  //   } else {
  //     console.log(`${element} is odd`);
  //   }

  return element % 2 === 0;
}
isEven(2);

var is_Even = (element) => {
  return element % 2 === 0;
};

// var result = [2, 3, 6, 8].every(is_Even);

// console.log(result);

//callback function
// ( (e)=> {return  (write your code)})
//((e)=> write your code)
var result = [2, 3, 6, 8].every((e) => e % 2 === 0);

console.log(result);
