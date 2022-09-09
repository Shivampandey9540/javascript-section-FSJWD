//throw

//Reference Error:- when you point to something and it's not there

/**
 * syntax error:-
 *
 */

// var name = "shivam";

function abc() {
  let name = "shivam";
  function abcd() {
    console.log(name);
  }
  return abcd;
}

var sco = abc();
sco();
