const first = { a: 2, b: 3, c: 4, d: 5};
const second = { a: 2, b: 3, c: 4, d: 8};

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// if(first === second){
//    console.log('They are same');
// }
// else{
//    console.log('They are diffrent');
// }

function compareObject(first, second) {
   const firstKey = Object.keys(first);
   const secondKey = Object.keys(second);

   if (firstKey.length === secondKey.length) {
      for(const key of firstKey){
         if (first[key] !== second[key]) {
            return false;
         }
      }
      return true;
   }
   else{
      return false;
   }
}

const comp = compareObject(firstString, secondString);
console.log(comp);