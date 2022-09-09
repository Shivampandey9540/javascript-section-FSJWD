// var number = document.querySelector(".counter");

// // setTimeout

// var follower = document.querySelector(".followers");
var number = document.getElementsByClassName("counter");
var follower = document.getElementsByClassName("followers");

var count = 0;

console.log(number);
//setInterval
setInterval(() => {
  if (count < 1000) {
    count++;
    number[0].innerHTML = count;
  }
}, 10);

//setTimeout
setTimeout(() => {
  follower[0].innerText = "follower on Instagram !";
}, 12250);
