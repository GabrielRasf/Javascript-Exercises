function sum (...num) {
    let total = 0
    for (const n of num) {
        total += n
    }
    return total
}

console.log(sum(1,2,3,4,5))
console.log(sum(2,4,6,8,10))

function sum() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(sum(3,6,9,12))


const sum = (...args) => {
    total = 0
    for (let i = 0; i < args.length; i++) {
        total += args
    }
    return total
}

console.log(sum(5,1,15,20,25,30))