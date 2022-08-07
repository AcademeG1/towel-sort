
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return []
    }
    let resultMass = []
    for (let i = 0; i < matrix.length; i++){
        if (i % 2 !== 0) {
            matrix[i].reverse().forEach(el1 => {
                resultMass.push(el1)
            })
        } else {
            matrix[i].forEach(el1 => {
                resultMass.push(el1)
            })
        }
    }
    return resultMass
}
