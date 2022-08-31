var num = 2;

// here is global context is using
function sayMe() {
  console.log("say me");
}
//here is  exucution  context to run the function
sayMe();

/**
 *
 *   ________________________________
 *           Execution Context
 *   ________________________________
 *           Execution Context
 *   ________________________________
 *           Global    context
 *   ________________________________
 *
 *
 */

/**
 * Execution Context:- It will give you some new
 * -----------------
 * variable object , Scope Chain  , This
 *
 *
 * rule -> function declarations are scanned and made aviable
 *      ->variable declartion are  scanned and made undefined
 *
 */

// tipper("112 kjlj");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

// function declarations are scanned and made aviable
BigTipper(234);

function BigTipper(a) {
  var bill = parseInt(a);
  console.log(bill + 15);
}

// but what if  it's a varaible  function

/**
 *
 * and now I run this before defining it
 */

// B_Tip(12);

var B_Tip = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};

/**
 * woopse it is sending error  why
 *       ->variable declartion are scanned and made undefined
 */

// More example for this
// lets take the example for this

//it will give you undefined but not error
console.log(name, "this is before declaring the variabe");

var name = "shivam";

console.log(name, "this is after the declaring the varible");

//but what if i will not write this MyName
console.log(MyName);

var MyName = "shivam";
// it will give me the error of (ReferenceError: MyName is not defined)
