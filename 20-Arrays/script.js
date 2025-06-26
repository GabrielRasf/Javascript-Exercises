// Push -> Adds one or more elements to the end of an array
console.log(`========= Push =========`)

const array1 = [1, 2, 3, 4, 5, 6]
console.log(array1)
array1.push(7)
console.log(array1)

// Pop -> Removes the last element from an array
console.log(`========= Pop =========`)

const array2 = [1, 2, 3, 4, 5, 6]
console.log(array2)
array2.pop()
console.log(array2)

// Shift -> Removes the first element from an array
console.log(`========= Shift =========`)

const array3 = [1, 2, 3, 4, 5, 6]
console.log(array3)
array3.shift()
console.log(array3)


// Unshift -> Adds one or more elements to the beginning of an array
console.log(`========= Unshift =========`)

const array4 = [1, 2, 3, 4, 5, 6]
console.log(array4)
array4.unshift(-2, -1, 0)
console.log(array4)

// FIFO -> First in first out
console.log(`========= FIFO =========`)

const queueFifo = []

queueFifo.push(1)
console.log(queueFifo)
queueFifo.push(2)
console.log(queueFifo)
queueFifo.shift()
console.log(queueFifo)
queueFifo.push(3)
console.log(queueFifo)

// LIFO -> Last in first out
console.log(`========= LIFO =========`)

const queueLifo = []

queueLifo.push(`First`)
console.log(queueLifo)
queueLifo.push(`Middle`)
console.log(queueLifo)
queueLifo.pop()
console.log(queueLifo)