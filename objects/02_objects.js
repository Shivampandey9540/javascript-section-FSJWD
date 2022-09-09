var user = {
  firstName: "shivam",
  lastName: "pandey",
  role: "Admin",
  logincount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (CouresName) {
    this.courseList.push(CouresName);
  },
  getcourseCount: function () {
    return `${this.courseList.length} `;
  },
  info: function () {
    return [
      this.firstName,
      this.lastName,
      this.role,
      this.logincount,
      this.facebookSignedIn,
    ];
  },
};

console.log(user.getcourseCount());

user.buyCourse("React Js course");

console.log(user.getcourseCount());

user.buyCourse("angular");

console.log(user.getcourseCount());

console.log(user.info());
