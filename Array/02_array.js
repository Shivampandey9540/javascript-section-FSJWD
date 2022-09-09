// Number
// String
// Array
// object

let userDetails = {
  firstname: "Shivam",
  lastName: "pandey",
  role: "admin",
  loginCount: 23,
};

console.log(userDetails);

let userDetailCourse = {
  firstname: "shivam",
  lastName: "pandey",
  role: "Student",
  googlelogin: true,
  courseList: [],
  buyCourse: function (coursename) {
    this.courseList.push(coursename);
  },
  getcoursecount: function () {
    return `${this.courseList.length} `;
  },
};

console.log(userDetailCourse.firstname);

userDetailCourse.buyCourse("React");

console.log(userDetailCourse.courseList);

console.log(userDetailCourse.getcoursecount());
