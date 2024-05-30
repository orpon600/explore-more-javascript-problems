const friendes = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// Removes elements from an array
// and, if necessary, inserts new elements in their place,
// returning the deleted elements.
//will change the original array
//// const partial = friendes.splice(2, 5,);
const partial = friendes.splice(2, 5, 234, 566);
console.log(partial);
console.log(friendes);
