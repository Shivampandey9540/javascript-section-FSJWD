// Arthmetic operators
/**
 * (+)
 * (*)
 * (/)
 * (-)
 * (%)
 *
 */

var num1 = 9;
var num2 = 6;

console.log(num1 * num2);

//condition Opertors
/**
 *  (>)
 *  (<)
 *  (<=)
 *  (==)
 *  (===)
 */
/**
 *
 * list price = l
 * selling price = s
 * Descount price =  D
 *
 */
// D = ((L - S) / L) * 100;

// a + ((b*c)/d)*e

var selling_price = 199;
var listing_price = 799;

var discount_percent = ((listing_price - selling_price) / listing_price) * 100;

console.log(`Discount Price :- ${discount_percent}`);

var displayDiscountPercentage = Math.round(discount_percent);

console.log(`Discount price rounded : - ${displayDiscountPercentage}`);

var result = listing_price > selling_price;

console.log(typeof result);

var a = 1;
++a;
console.log(a);
