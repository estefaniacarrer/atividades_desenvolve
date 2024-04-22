//fazendo clone de um array

const notas = [7, 7, 8, 9];

//spread operator, ou "operador de espalhamento" -> copia exatamente o array como o original sem modifica-lo com futuras alterações
const novasNotas = [...notas, 10]

console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)