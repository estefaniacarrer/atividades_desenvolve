const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

//set -> usado para remover elementos repetidos
const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados) 
console.log(nomes)