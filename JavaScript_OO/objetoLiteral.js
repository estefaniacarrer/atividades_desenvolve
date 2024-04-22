const user = {
    nome: "Estefania",
    email: "e@e.com",
    nascimento: "1999/10/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
      console.log(this.nome, this.email)
    }
  }

  user.exibirInfos()

  const exibir = function() {
    console.log(this.nome)
  }

const exibirNome = exibir.bind(user)
exibirNome()

const admin = {
    nome: "Maria",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
      console.log('curso criado!')
    }
}

//objeto que vai herdar, depois o objeto padrão
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()