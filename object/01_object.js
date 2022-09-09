var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is : ${this.name}`);
  },
};
var shivam = Object.create(User);
console.log(shivam);

var sam = Object.create(User, {
  name: { value: "sammy" },
  courseCount: { value: 3 },
});

sam.getUserName();
