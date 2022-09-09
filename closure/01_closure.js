function init() {
  var firstName = "shivam";
  function syaFirstName() {
    console.log(firstName);
  }
  return syaFirstName;
}

var value = init();

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(5);

// add5(10);

console.log(add5(10));

console.log(doAddition(10)(9));

(function () {
  console.log("hellow");
})();
