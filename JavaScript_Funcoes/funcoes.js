//parametros/argumentos
//retorno

function exibeInfosEstudante(nome, nota) {
    return `O nome é ${nome} e a nota é ${nota}`;
}

console.log(exibeInfosEstudante('Estefania', 10));
console.log(exibeInfosEstudante('Ana', 7));


//expressao função:

const estudanteReprovou = function (notaFinal, faltas){
    if(notaFinal <7 && faltas >4){
    return true;
} else {
    return false;
}
}

console.log(estudanteReprovou (6,5));
console.log(estudanteReprovou(10,2));


//arrow-function:

const estudanteReprovou2 = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
      return true;
    } else {
      return false;
    }
  }

  const exibeNome = (nome) => nome;

console.log(estudanteReprovou2 (6,5));
console.log(estudanteReprovou2 (10,2));
console.log(exibeNome('Estefania'));
  