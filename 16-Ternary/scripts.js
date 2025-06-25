// condition ? true : false

const evenOdd = (n) => n % 2 === 0 ? `Even` : `Odd`

console.log(evenOdd(3)) // return odd
console.log(evenOdd(2)) // return even
console.log(evenOdd(0)) // return even



const pass = (grade) => 
    grade >= 7 ? `Aproved` :
    grade >= 5 ? `Recovery` :
    `Failed`

console.log(pass(3)) // return failed
console.log(pass(6.2)) // return recovery
console.log(pass(9)) // return aproved

const bool = (b) => b === true ? `Yes` : `No`

console.log(bool(true))
console.log(bool(false))