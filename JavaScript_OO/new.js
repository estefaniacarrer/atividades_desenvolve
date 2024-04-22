// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }

//const novoUser = new User('Mariana', 'm@mariana.com')
//console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Mariana', 'm@mariana')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

//outra forma:
const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Mariana', 'm@mariana.com')
console.log(novoUser.exibirInfos())

// console.log(novoUser.exibirInfos('Mariana'))
// console.log(user.isPrototypeOf(novoUser))