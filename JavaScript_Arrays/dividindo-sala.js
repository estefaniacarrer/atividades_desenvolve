const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//slice -> criamos novas listas a partir de uma, slice -> dividir
const sala1 = alunos.slice(0, alunos.length/2); // aqui ele usa os alunos do indice 0 até o aluno do meio
const sala2 = alunos.slice(alunos.length/2)// aqui ele usa o indice apos o aluno do meio até o final

console.log(sala1)
console.log(sala2)