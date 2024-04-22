import User from './User.js'
import Docente from './Docente.js'
import Admin from './Admin.js'

//const novoUser = new User('Mariana', 'm@mariana.com', '2021-01-01')
//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@rodrigo.com', '2020-07-10')
console.log(novoAdmin.nome)
novoAdmin.nome = 'Andre'
console.log(novoAdmin.nome)

const novoDocente = new Docente('Guilherme', 'g@guilherme.com', '1991-10-08')
console.log(novoDocente.exibirInfos())