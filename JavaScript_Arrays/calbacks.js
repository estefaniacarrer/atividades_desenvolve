const nomes = ["Eduardo", "Mari", "Camila"]


// ----------- primeiro exemplo
nomes.forEach(function(nome){
    console.log(nome)
})

// ----------- segundo exemplo
nomes.forEach((nome)=> {
    console.log(nome)
})

// ----------- terceiro exemplo
function imprimeNome (nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)