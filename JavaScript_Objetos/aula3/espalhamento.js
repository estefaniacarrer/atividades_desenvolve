const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
    {
        rua: "R. Joseph Climber2",
        numero: 133,
        apartamento: true,
        complemento: "ap 933",
      },

  ];

  function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
  }

  //sintaxe de espalhamento
  ligaParaCliente(...cliente.telefone)

  const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[1]
  }

  console.log(encomenda)