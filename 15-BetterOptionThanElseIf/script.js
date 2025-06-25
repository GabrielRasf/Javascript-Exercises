
function gradeMessage(grade) {
    switch (grade.toUpperCase()) {
        case `A`:
            return `Excelent`
        case `B`:
            return `Good`
        case `C`:
            return `Fair`
        case `D`:
            return `Poor`
        case `E`:
            return `Fail`
        default:
            return `Invalid grade`
    }
}

console.log(gradeMessage(`a`)) // return Excelent

// Object Value Map

const gradeMap = {
    1: `Excelent`,
    2: `Good`,
    3: `Fair`,
    4: `Poor`,
    5: `Fail`
}

const students = [
    {name: `Gabriel`, grade: 2},
    {name: `Peter`, grade: 1},
]

students.forEach(student => {
    const message = gradeMap[student.grade] || `Invalid grade`
    console.log(`${student.name}: ${message}`)
})