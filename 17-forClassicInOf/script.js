// Classic
console.log(`====== Classic ======`)

const array = [1,2,3,4,5,6,7,8,9,10]
for (let i= 0; i < array.length; i++) {
    console.log(array[i])
}

// In - better for objects
console.log(`====== In ======`)

const person = {
    name: `Alice`,
    age: 32,
    city: `NY`
}

for (p in person) {
    console.log(p, person[p])
}

// Of
console.log(`====== Of ======`)

const even = [`bear`, `dog`, `cat`, `lion`]

for (let n of even) {
    console.log(n)
}