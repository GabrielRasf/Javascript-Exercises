// Map
console.log(`======= Map =======`)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dobble = numbers.map(function (n) {
    return n * 2
})

console.log(numbers)
console.log(dobble)

// Filter
console.log(`======= Filter =======`)

const filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = filterNumbers.filter(n => n % 2 === 0)
console.log(evenNumbers)

console.log(`======= Filter =======`)

const people = [
    { name: `Gabriel`, age: 32 },
    { name: `Anna`, age: 15 },
    { name: `Jim`, age: 28 }
]

const person = people.filter(person => person.age >= 18)
console.log(person)

console.log(`======= Filter =======`)

const names = [`James`,`John`,`Michael`,`William`,`David`,`Joseph`,`Daniel`,`Matthew`,`Joshua`,`Andrew`,`Emily`,`Olivia`,`Emma`,`Sophia`,`Ava`,`Isabella`,`Mia`,`Charlotte`,`Amelia`,`Abigail`,`Taylor`,`Jordan`,`Morgan`,`Casey`,`Riley`,`Jamie`,`Alex`,`Camern`,
`Avery`,`Quinn`]

const letter = prompt(`Type a letter`)

const result = names.filter(name => name.toLowerCase().startsWith(letter.toLowerCase()))

if (result.length === 0) {
    console.log(`No words found`)
}

console.log(result)