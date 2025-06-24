let string = `123.45`
console.log(string)
console.log(typeof(string)) // return string

let converted = parseFloat(string)
console.log(typeof(converted)) // return number

console.log(converted)

let text = `12as3.45`
console.log(text)
console.log(typeof(text)) // return string

let textConverted = parseFloat(text) // Here the variable lost chars because of the letter
console.log(textConverted)
console.log(typeof(textConverted)) // return number

let letter = `a12321`
console.log(letter)
console.log(typeof(letter))

let letterWhat = parseFloat(letter)
console.log(letterWhat) // return NaN
console.log(typeof(letterWhat)) // Is a number