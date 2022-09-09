/**
 *
 * this is a keyword
 * @param {functional approch} firstName
 * @param {functional approch} courseCount
 */

//irragular function
var User = function (firstName, courseCount) {
  // "this" keyword is pointing inside the function not global window object
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCoursecount = function () {
    console.log(`course count is : ${this.courseCount}`);
  };
};
// so it will be undefined by nature

/**
 * this " new " keyword is use to create a new copy of a function
 * and "new " keyword also making this call a irrgular function call
 */

var shivam = new User("shivam", 2);

console.log(shivam);
