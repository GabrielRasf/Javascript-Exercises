// Break
console.log(`======== Break ========`)

let a = Number(prompt(`Write a number between 1 and 100`))

for (let i = 0; i <= 100; i++) {
    if (i === a) {
        break
    }
    console.log(i)
}
// alert(`Number ${a} founded`)
console.log(`Number ${a} founded`)


//Continue
console.log(`======== Continue ========`)

for (let i = 0; i <= 10; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}

// Label

console.log(`======== Label ========`)

outerLoop: 
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`i: ${i}, j: ${j}`)
            if (i === 6 && j === 9) {
                break outerLoop
            }
        } 
}