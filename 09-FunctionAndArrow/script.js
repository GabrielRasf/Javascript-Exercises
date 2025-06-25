// Tradicional Function

function verifyAge(age) {
    if (age >= 18) {
        console.log(`An adult`)
    } else {
        console.log(`Young`)
    }
}

verifyAge(21)
verifyAge(12)

// Arrow Function

const canDrive = (age, hasLicense) =>  
    age >= 18 && hasLicense == true ? `Can drive` : `Cannot drive`

console.log(canDrive(20, true))
console.log(canDrive(16, false))
console.log(canDrive(18, false))
