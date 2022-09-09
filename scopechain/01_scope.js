var name = "shivam";

console.log("Line number 3", name);

function sayname() {
  var name = "Mr, S";
  console.log("line number 9", name);

  sayname2();
  function sayname2() {
    console.log("line number 13 ", name);
  }
}

sayname();
