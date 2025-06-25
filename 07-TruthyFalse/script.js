function testValue(value) {
    if (value) {
        console.log(`The value of "${value}" is truthy`)
    } else {
        console.log(`The value of "${value}" is falsy`)
    }
}
console.log(`========= Truthy =========` )
console.log(testValue(true))
console.log(testValue(1))
console.log(testValue({}))
console.log(testValue(`text`))
console.log(testValue([]))

console.log(`========= Falsy =========` )
console.log(testValue(false))
console.log(testValue(0))
console.log(testValue(""))
console.log(testValue(NaN))
console.log(testValue(null))
console.log(testValue(undefined))

console.log(`========= && - Return the first falsy or the last truthy =========`)
console.log(`text` && 0 && true)
console.log(1 && `hello` && 42)
console.log(false && true)
console.log(`foo` && `bar`)

console.log(`========= || - Return the first truthy or the last falsy =========`)
console.log(`text` || 0 || 1)
console.log(0 || false || 43)
console.log(true || `really` || 1)
console.log(NaN || undefined || 0)

console.log(`========= ?? - Return the first value that is not null or undefined =========`)
console.log(true ?? null ?? 1)
console.log(undefined ?? null ?? 0 )
console.log(`text` ?? NaN ?? false)
console.log(null ?? "" ?? false)

