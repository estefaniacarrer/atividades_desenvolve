const alunos = ["Ana", "Marcos", "Maria", "Mauro"]
const medias = [7, 4.5, 8, 7.5]

//filtra apenas os alunos reprovados (de acordo com o retorno)
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7
})

console.log(reprovados)
