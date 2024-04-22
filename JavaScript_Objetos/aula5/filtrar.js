const clientes = require("./clientes.json")

function filtrandoApartamentoSemComplemento (clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento") //verificar se o endereço do cliente tem complemento
        );
    });
}


const filtrados = filtrandoApartamentoSemComplemento(clientes);

console.log(filtrados);