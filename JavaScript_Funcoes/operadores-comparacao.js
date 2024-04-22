const estaAprovado = true;

if(estaAprovado === true) { // === compara o tipo de dados e o valor
    console.log('aprovado');
}

if ('0' == 0) { // comparando o valor - sempre utilizar o ===
    console.log('passou na comparação');
} else {
    console.log('não passou na comparação');
}


const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
    console.log('não precisa de autorização');
} else {
    console.log('precisa de autorização');
}