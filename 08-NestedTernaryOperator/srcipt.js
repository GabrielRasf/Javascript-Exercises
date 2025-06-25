const verifyNumber = (n) => {
    const num = Number(n)
    return isNaN(num) ? `Is not a number` :
            num > 0 ? `Positive` :
            num === 0 ? `Zero` : `Negative`
}

console.log(verifyNumber(``))
console.log(verifyNumber(`four`))
console.log(verifyNumber(3))
console.log(verifyNumber(0))
console.log(verifyNumber(-1))