// const restul = myNumber.filter((num) => num > 55);

/*
 *When every we pass the range then starting range will be
 *inclusive and ending range will be exclusive
 *
 */
//              0      1      2      3      4      5
var users = ["Ted", "Tim", "Tom", "Sod", "Sam", "Sor"];

console.log(users.slice(1, 3));

const new_user = ["Ted", "Tim", "Tom", "Sod", "Sam", "Sor"];

new_user.splice(1, 2, "HI");

console.log(new_user);
