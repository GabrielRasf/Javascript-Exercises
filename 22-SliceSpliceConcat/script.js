// Slice -> Copies a portion of an array and return a new array with the copied elements
console.log(`======= Slice =======`)
const array = [1,2,3,4,5,6,7,8,9,10]
console.log(array)

const arraySlice = array.slice(5,10)
console.log(arraySlice)

// Splice -> Removes and/or adds elements in the array and returns array with the removed elements
console.log(`======= Splice =======`)

const control = [1,2,3,4,5]
console.log(control)

control.splice(0,5,10,20,30) // Remove all 5 index and add a new
console.log(control)

control.splice(3, 3, 100,200,300) // Add a new
console.log(control)

// Concat -> Joins array into a new array and return new array combining the arrays
console.log(`======= Concat =======`)

const fruits1 = [`banana`, `apple`]
console.log(fruits1)
const fruits2 = [`grape`, `kiwi`]
console.log(fruits2)
const allFruits = fruits1.concat(fruits2)
console.log(allFruits)

