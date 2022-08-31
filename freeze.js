/**
 * delete, seal, freeze\
 */
const bottle = {
   color: 'yellow',
   price: 50,
   isCleaned: true,
   capacity:1
};

const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle);

// console.log(keys);
// console.log(values);
// console.log(pair);
console.log(bottle);
Object.seal(bottle);
bottle.price = 11;
console.log(bottle);
Object.freeze(bottle);
bottle.price = 10;
delete bottle.isCleaned;
bottle.price = 1000;
console.log(bottle);