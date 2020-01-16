
spec = [1, 2, 3]
norm = Math.sqrt(spec.map(x => Math.pow(x, 2)).reduce((prev, next) => prev + next, 0))
console.log(norm)

unit_vector  = spec.map(x => x / norm)
console.log(unit_vector)
x = unit_vector.map(x => Math.pow(x, 2)).reduce((prev, next) => prev + next, 0)
//x = Math.sqrt(spec.map(x => Math.pow(x, 2)).reduce((prev, next) => prev + next, 0) / norm)
console.log(x)
