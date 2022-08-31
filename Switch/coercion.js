/**
 * These are the Falsy value:-
 *
 *
 * undefined
 * null
 *  0
 * ' '
 * NaN
 */

//truthy value
var user = "NaN";

//falsy value
var uSer = "";

if (user) {
  console.log("condition is true");
}

console.log("2" + 2);

// cheak the === and ==

var user_new = "2";

if (2 === user_new) {
  console.log("if user_new is 2 in number then only it will runn");
}

if (2 == user_new) {
  console.log("if user_new is 2 in string or number ");
}
