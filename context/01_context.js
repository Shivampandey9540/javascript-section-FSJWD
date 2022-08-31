//understand the globality of function

//global context
sayHello();

function sayHello() {
  console.log("hello");
}
// Question : - Where does this context reside
/** For the browser it's in the window but there is
 * alway's a context holder   for javascript
 */

/**
 * ****run this on the browser console
 *
 *  var myName="shivam"
 *
 * if(myName ===window.myName){
 * console.log("shivam name is true")
 *
 * }
 *
 * **** but it will not work on my terminal due to no a
 * avaliabliity of window
 *
 */

var myName = "shivam";

if (myName === myName) {
  console.log(`it is true`);
}
