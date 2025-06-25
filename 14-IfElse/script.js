function verifyNumber(num) {
    if (num > 0) {
        return `Positive`
    } else if (num === 0) {
        return `Zero`
    } else {
        return `Negative`
    }
}

console.log(verifyNumber(21))
console.log(verifyNumber(0))
console.log(verifyNumber(-1))

const ageCategory = (age) => {
    if (age <= 12) {
        return `Child`
    } else if (age <= 17) {
        return `Teenager`
    } else if (age <= 65) {
        return `Adult`
    } else {
        return `Senior`
    }
}

console.log(ageCategory(8))
console.log(ageCategory(17))
console.log(ageCategory(29))
console.log(ageCategory(72))
