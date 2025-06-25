// Hoisting only works with tradicional functions

console.log(hi(`Gabriel`))

function hi(name) {
    console.log(`Nice to meet you, ${name}`)
}


// In this case, age is undefined and throw an error

console.log(age(32))

const age = (n) => {
    return console.log(`My age is ${age}`)
}