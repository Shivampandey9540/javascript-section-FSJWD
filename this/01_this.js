console.log(this);

/**
 * This
 * what does this contain's?
 * This contains the 2 types of information inside it
 * based of senario
 * 1 ---- regular calling function have the Window object contian
 * inside
 * 2 --- and other unregular callling funciton have the varaible or object it's self to call
 *
 *
 * what is regular funciton  ?
 *
 *  function sayname(){
 * console.log("here will be this", this)
 * }
 * sayname();
 * ----------this is a regular function call
 *
 * what is unregular calling functions ?
 *
 * var user ={
 *   firstname: "shivam",
 * courseCount: 4,
 * getCourseCount: function () {
 * console.log(this, "line 7");
 * }
 *
 * user.getcourseCount();
 * ------ this is a unregualr Calling of function
 */

var user = {
  firstname: "shivam",
  courseCount: 4,
  getCourseCount: function () {
    console.log(this, "line 7");

    //this is a regular function
    function sayHello() {
      console.log("hello");
      console.log("line 10", this);
    }
    sayHello();
  },
};

user.getCourseCount();
