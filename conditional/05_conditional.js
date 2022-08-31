var is_logged_In = true;
var isEmail_verified = true;
var card_Info = true;

// if (is_logged_In) {
//   console.log("Logged IN Success");
//   if (isEmail_verified) {
//     console.log("Email is Verified");
//     if (card_Info) {
//       console.log("you Can make a purchase");
//     }
//   }
// }

if (is_logged_In && isEmail_verified && card_Info) {
  console.log("you can make a purchase");
} else {
  console.log(" your NOT allow to do that");
}

//Assigment for Condition

var Google_logIn = true;
var facebook = false;
var outlook = false;

if (Google_logIn || facebook || outlook) {
  console.log("He is log in");
}
