const dados = require("./cliente.json")

console.log(dados);
console.log(typeof dados);

//transf em string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

//transf em JSON
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);