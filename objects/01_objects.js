var user = {
  firstName: "shivam",
  lastName: "pandey",
  role: "Admin",
  logincount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.logincount);
user.logincount = 22;
console.log(user.logincount);

console.table(user);

var smartphone = {
  Camera: "sony-camera",
  Storage: "64Gb LLPD - 5.1",
  os: "Android",
  RAM: "8Gb",
  Modal: "MK10101",
  Processer: "Snaptail888",
  color: "black",
};

console.table(smartphone);
