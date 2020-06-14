//npm init -y // transforma a pasta simples em um projeco com package
//npm install express // instala o modulo express no projeto //cria a pasta node_modules
//npm install nodemon // para reiniciar o servidor automaticamente //atualizar no package.json
//template engine transforma o html permitindo funcções, variaveis, etc.//e trocar dados com o servidor
//template engine// npm install nunjucks
//npm install sqlite3 // usado para criar um banco de dados na aplicação
//const sqlite3 = require("sqlite3").verbose() //para importar a dependencia do sqlite3
//const db = new sqlite3.Database("./src/database/database.db")  //constructor para criar/iniciar o objeto do banco de dados
//no terminal // node src/database/db.js para criar o banco de dados na parta database.


// comments
// document.write("Hello")

// variaveis, tipos de dados
// let myvar = "He"
// const myconst = "He"

// document.write(myconst + myvar)

// string
// "Isso é uma string"
// 'Isso também é um string'
// `Isso é uma string também`

// number
// const n1 = 1
// const n2 = 12
// document.write(n1 + n2)

// boolean - true ou false
// const bTrue = true
// const bFalse = false
// document.write(bFalse)

// objeto possuem propriedades e funcionalidade
// const pessoa = {
//   altura: "1,80m",
//   idade: 24,
//   solteiro: true,
//   correr(){
//     document.write("executar uma grande logica de correr")
//   }
// }

// pessoa.correr()

// Array - Vetores
// const colecaoDeBolinhas = ["blue", "green", 1, {name: "My Name"}]

// document.write(colecaoDeBolinhas[3].name)


// Funções - Funcionalides - Atalhos - Reuso de código

// // registrar função
// function sayMyName(name) {
  
//   document.write(name)
// }

// // executar
// sayMyName("Douglas")
// sayMyName("Valeska")
// sayMyName("Kyam")

// condicionais

// const notaFinal = 7

// if( notaFinal < 5 ) {
//   document.write("Reprovado")
// } else {
//   document.write("Aprovado")
// }

// loop repetições
// for (i = 0; i < 10; i++) {
//   document.write(`<p>${i}</p>`)
// }