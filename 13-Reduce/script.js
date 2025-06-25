// Sum

const sum = (...numbers) => {
    return numbers.reduce((acc, cur) => acc + cur, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // return 55

// Multiplication

const multiplication = (...number) => {
    return number.reduce((accumulator, current) => accumulator * current, 1)
}

console.log(multiplication(2, 4, 6, 8, 10))

// Concatenate

const concatenate = (...words) => {
    return words.reduce((total, actual) => total + actual, " ")
}

console.log(concatenate("Hello", " ", "world", "! "))
console.log(concatenate("Hello ", "World", "!"))

// Even numbers

const evenNumbers = (...num) => {
    return num.reduce((acc, cur) => {
        if (cur % 2 == 0) {
            acc++
        }
        return acc
    }, 0)
}

console.log(evenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Largest number

const largestNumber = (...num) => {
    return num.reduce((acc, cur) => {
        return Math.max(acc, cur)
    })
}

console.log(largestNumber(10,20,30))

// Counting the frequency

