/**
 * Define a funciton athat can answer the role of a user.
 * a user can be on following roles;
 * admin - with all access
 * subadmin - with acces to create/delete courese
 * test prep -with access to create/delets test
 *
 * user - cosnsume all content
 * other trail  user
 *
 *
 */

//normal funciton
function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
    case "subadmin":
      return `${name} is subadmin can delete and create course`;
    case "testprep":
      return `${name} is tester and can delete and create test `;
    case "user":
      return `${name} is user  and consume all content`;
    default:
      return `${name} is trail user`;
  }
}

console.log(getUserRole("shivam", "testprep"));

// function in variable
var getUserRole_new = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
    case "subadmin":
      return `${name} is subadmin can delete and create course`;
    case "testprep":
      return `${name} is tester and can delete and create test `;
    case "user":
      return `${name} is user  and consume all content`;
    default:
      return `${name} is trail user`;
  }
};

var cheaking_variable = getUserRole_new("shivam", "admin");
console.log(cheaking_variable);
