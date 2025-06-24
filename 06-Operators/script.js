console.log(`========= addition =========`)

let addition = (n1, n2) =>  n1 + n2
console.log(addition(1,2))

// ================================
console.log(`========= subtraction =========`)

let subtraction = (n1, n2) => n1 - n2
console.log(subtraction(2,1))

// ================================
console.log(`========= multiplication =========`)

let multiplication = (n1, n2) => n1 * n2
console.log(multiplication(2, 2))

// ================================

console.log(`========= division =========`)

let division = (n1, n2) => n1 / n2
console.log(division(4, 2))
console.log(division(3, 2))
console.log(division(5,3).toFixed(2))

// ================================
console.log(`========= modulus =========`)

let modulus = (n1, n2) => n1 % n2
console.log(modulus(5, 2)) // return the remainder of the operation

// ================================
console.log(`========= exponention =========`)

let exponention = (n1, n2) => n1 ** n2
console.log(exponention(2, 3))

// ================================
console.log(`========= increment =========`)

let increment = (n1) => {
    n1++
    return n1
}
console.log(increment(3)) //return 4, increment 1

// ================================
console.log(`========= decrement =========`)

let decrement = (n1) => {
    n1--
    return n1
}
console.log(decrement(4)) //return 3, decrement 1

// ================================
console.log(`========= assignment =========`)

let assignment = (n1, n2) => {
    console.log(`n1 before: `, n1)
    console.log(`n2:`, n2)
    n1 = n2
    console.log(`n1 after:`, n2)
    return n1
}
console.log(assignment(2, 5))

// ================================
console.log(`========= additionAssignment =========`)

let additionAssignment = (n1, n2) => {
    return n1 += n2
}
console.log(additionAssignment(3, 4))

// ================================
console.log(`========= subtractionAssignment =========`)

let subtractionAssignment = (n1, n2) => {
    return n1 -= n2
}
console.log(subtractionAssignment(7, 3))

// ================================
console.log(`========= multiplicationAssignment =========`)

let multiplicationAssignment = (n1, n2) => {
    return n1 *= n2
}
console.log(multiplicationAssignment(3, 4))

// ================================
console.log(`========= divisionAssignment =========`)

let divisionAssignment = (n1, n2) => {
    return n1 /= n2
}
console.log(divisionAssignment(18, 2))

// ================================
console.log(`========= modulusAssignment =========`)

let modulusAssignment = (n1, n2) => {
    return n1 %= n2
}
console.log(modulusAssignment(15, 4))

// ================================
console.log(`========= equality =========`)

let equality = (n1, n2) => {
    console.log(`n1 before: ${n1}`)
    console.log(`n2: ${n2}`)
    n1 = n2
    console.log(`n1: ${n1} n2: ${n2}`)
}
console.log(equality(3, 5))

// ================================
console.log(`========= strictEquality =========`)

let strictEquality = (n1, n2) => {
    console.log(typeof(n1))
    console.log(typeof(n2))
    console.log(n1 == n2) // return true
    console.log(n1 === n2) // return false
}
console.log(strictEquality(3, `3`))

// ================================
console.log(`========= inequality =========`)

let inequality = (n1, n2) => {
    return n1 != n2
}
console.log(inequality(3, 3))
console.log(inequality(2, 3))
console.log(inequality(3, `3`))
console.log(inequality(`3`, `três`))

// ================================
console.log(`========= strictInequality =========`)

let strictInequality = (n1, n2) => {
    return n1 !== n2
}
console.log(strictInequality(1, `um`))
console.log(strictInequality(22, `22`))
console.log(strictInequality(3, 3))
console.log(strictInequality(5.5, true))

// ================================
console.log(`========= greaterThan =========`)

let greaterThan = (n1, n2) => {
    return n1 > n2
}

console.log(greaterThan(3, 2))
console.log(greaterThan(2, 2))
console.log(greaterThan(2, 3))

// ================================
console.log(`========= lessThan =========`)

let lessThan = (n1, n2) => {
    return n1 < n2
}

console.log(lessThan(3, 2))
console.log(lessThan(2, 2))
console.log(lessThan(2, 3))


// ================================
console.log(`========= greaterThanOrEqual =========`)

let greaterThanOrEqual = (n1, n2) => {
    return n1 >= n2
}

console.log(greaterThanOrEqual(3, 2))
console.log(greaterThanOrEqual(2, 2))
console.log(greaterThanOrEqual(2, 3))

// ================================
console.log(`========= lessThanOrEqual =========`)

let lessThanOrEqual = (n1, n2) => {
    return n1 <= n2
}

console.log(lessThanOrEqual(3, 2))
console.log(lessThanOrEqual(2, 2))
console.log(lessThanOrEqual(2, 3))

// ================================
console.log(`========= strictInequality =========`)

let and = (n1, n2) => {
    if (isNaN(n1) || isNaN(n2)) {
        console.log(`One or both are not numbers`)
        return
    }

    if (n1 > 3 && n2 < 5) {
        console.log(`n1 and n2 meet the condition`)
    } else {
        console.log(`Not meet the condition`)
    }
}

console.log(and(2,3))
console.log(and(4, 4))
console.log(and(3, "4"))
console.log(and(5, "abc"))

// ================================
console.log(`========= or =========`)

let or = (n1, n2) => {
    if (isNaN(n1) || isNaN(n2)) {
        console.log(`One or both are not numbers`)
        return
    }

    if (n1 === 0 || n2 === 10) {
        console.log(`n1 and n2 meet the condition`)
    } else {
        console.log(`Not meet the condition`)
    }
}

console.log(or(3, 6))
console.log(or(0, 6))
console.log(or(3, "três"))
console.log(or(8, 10))

// ================================
console.log(`========= not =========`)

let not = (n1) => {
    if (typeof n1 != "string") {
        console.log(`${n1} Is not a string`)
    } else {
        console.log(`Is a string`)
    }
}

console.log(not("Text"))
console.log(not(32))

// ================================
console.log(`========= ternary =========`)

let ternary = (n1, n2) => {
    return n1 > n2  ? `Yes` : `No`
}

console.log(ternary(3, 2))
console.log(ternary(2, 2))
console.log(ternary(2, 3))




