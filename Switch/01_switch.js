//Crate an application with flallowing case
/**
 * admin - gets full access
 * subadmin  -gets access to create / delete courses
 * testprep - gets acces to create/deelete test
 *  user - gets access to consume content
 *
 */

var user = "testprep";

switch (user) {
  case "admin":
    console.log(" you get full access here");
    break;
  case "testprep":
    console.log("You are here to test");
    break;
  case "subadmin":
    console.log("You can create and delete things");
    break;
  case "user":
    console.log("You can acces the coures");
    break;

  default:
    console.log("Trial user");
    break;
}
