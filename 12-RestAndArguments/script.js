// rest
function sum (...num) {
    let total = 0
    for (const n of num) {
        total += n
    }
    return total
}

const s = (...n) => {
    let total = 0
    for (let i = 0; i < n.length; i++) {
        total += n[i]
    }
    return total
}

console.log(s(5,1,15,20,25,30))

// arguments 
// is an array-like object. It contains all the arguments passed to the function
console.log(su(1,2,3,4,5))
console.log(su(2,4,6,8,10))

function su() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(su(3,6,9,12))


