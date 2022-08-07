function towelSort(mass) {
    if (mass === undefined) {
        return []
    }
    let resultMass = []
    for (let i = 0; i < mass.length; i++){
        if (i % 2 !== 0) {
            mass[i].reverse().forEach(el1 => {
                resultMass.push(el1)
            })
        } else {
            mass[i].forEach(el1 => {
                resultMass.push(el1)
            })
        }
    }
    return resultMass
}

console.log(towelSort())
