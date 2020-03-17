// DEFAULT
function discountedPrice(itemPrice) {
  return itemPrice -(itemPrice * 0.25)
} // DONT HARDCODE THE DISCOUNT, INSTEAD...

function discountedPrice(itemPrice, discount) {
  return itemPrice -(itemPrice * discount)
}
// call looks like ^
discountedPrice(100, 0.25); //=> 75.0

function discountedPrice(itemPrice, discount = 0.25 /* default value */) {
  return itemPrice -(itemPrice * discount)
}

// this function accounts for tax
function discountedAndTaxedPrice(itemPrice, tax, discount = 0.25) {
  return itemPrice - (itemPrice * discount) + (itemPrice * tax)
}
discountedAndTaxedPrice(100, 0.15) //=> 90


/* REST
put remaining arguments into an array */
function muppet_lab(a, b, ...muppets) {

  console.log(a,b);
  console.log(a, '', b)
  console.log(muppets);
  console.log(muppets[0]);
  console.log(muppets.length);
}

muppet_lab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal")

// Dr. Bunson Beaker
// Dr. Bunson  Beaker
// >(3) ["Miss Piggy", "Kermit", "Animal"]
// Miss Piggy
// 3

/* SPREAD
pass array elements into function arguments */

function add (a, b, c,) {
  return a + b + c;
}
const arr = [1, 2, 3]; 
add(...arr); // passng in an array => returns 6

let brr = [5, 4, 3, 2, 1, 6, 7, 8, 9, 0];
add(...brr);  // passng in an array => returns 12