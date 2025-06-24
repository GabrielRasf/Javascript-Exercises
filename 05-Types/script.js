// NaN -> Not a number, is used to indicate that a value is not a value number, even though it's of type number

let verify = NaN === NaN
console.log(verify) // return false because NaN is considered "not equal" to anything - even itsef

let verifyNaN = (value) => {
    if (Number.isNaN(value)) {
        console.log(`${value} is NaN`)
    } else {
        console.log(`${value} is ${typeof(value)}`)
    }
}

verifyNaN(NaN)
verifyNaN(0)
verifyNaN(`abc`)
verifyNaN(3 < 2)
verifyNaN(undefined)
verifyNaN(null)