//curring
const shivam = {
  firstName: "shivam",
  lastName: "pandey",
  role: "Admin",
  courseCount: 3,
  /**
   * "this " in here is pointing toward's the shivam
   * and it's  very flexable about it
   */
  getInfo: function () {
    console.log(`
        first name is :- ${this.firstName}
        last name is :- ${this.lastName},
        His role is : - ${this.role},
        and he is studying  ${this.courseCount} course
        `);
  },
};

const DJ = {
  firstName: "rock",
  lastName: "dj",
  role: "Sub-Admin",
  courseCount: 4,
};

shivam.getInfo.bind(DJ)();

var djInfo = shivam.getInfo.bind(DJ);

/**
 * what does bind does;
 * It's gives the referance of a method from a object to
 * another object
 */
