// const numbers = [12, 23, 34, 45, 56, 76, 87];
// for(const number of numbers){
//    console.log(number);
// }
const bottle = {
   color: 'yellow',
   price: 50,
   isCleaned: true,
   capacity: 1
};
// const values = Object.values(bottle);
// const pair = Object.entries(bottle);

/**
 * 3 ways to read object properties
 * -- bottle.color
 * -- bottle['color']
 * -- bottle[key] (key is a variable)
 */

const keys = Object.keys(bottle);
// for of
for (const key of keys) {
   // console.log(key, bottle[key]);
}

// for in
for (const key in bottle) {
   // console.log(key, bottle[key]);
}


// advanced process
const pair = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)){
   console.log(key, value);
}