//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar/iniciar o objeto do banco de dados
const db = new sqlite3.Database("./src/database/database.db")  //constructor

module.exports = db //usado para exportar o modulo do banco de dados

//utilizar o banco de dados
db.serialize(() => {   //rodara uma sequencia de codigos

/*    
//1° Criar uma tabela com o nome places se não existir essa tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (  
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

//2° Insera dados na tabela "places" *Os valores (?)serão trocados posteriormente dinamicamente
    const query = `
       INSERT INTO places (
            image, 
            name, 
            address, 
            address2, 
            state, 
            city, 
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
        const values = [
            "https://meticulousblog.org/wp-content/uploads/2019/11/E-Waste-Management-Market-Blog.jpg",
            "Papersiders",
            "Guilherme Gemballa, Jardim América",
            "N° 260",
            "Santa Catarina",
            "Rio do Sul",
            "Resíduos Eletrônicos, Lâmpadas"
        ]

        function afterInsertData(err) {                 // depois de inserido os dados
            if (err) {                                  //se houver erro
            return console.log(err)                 // Retorne a informação com o erro
        }
            console.log("Cadastrado com sucesso!")  //Se não ouver erro retorne esse aviso
            console.log(this)                       //log oculta referenciando o rodar (run)
    }
   
    db.run(query, values, afterInsertData)          //banco de dados roda as query, depois as values e por ultimo a afterInsertData


//3° Consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows) { //pesquisa em all(todo) o banco de dados selecionando tudo(*) da tabela places
        if(err) {                                       //Se nao encontrar 
            return console.log (err)                    //retorna erro
        }
        console.log("Aqui estão seus registros: ")      //se encontrar retorna essa mensagem
        console.log(rows)                               //log oculta de referencia dos registros (rows)
    })  
  

//4° Deletar dados na tabela
   db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {   //Deletar da tabela places onde o id for indicado no caso 1
       if (err){                                       //Se houver erro na hora de deletar o registro
           return console.log(err)                     //Retornar a informação do erro
        }
        console.log("Registro deletado com sucesso!")   //Se não houver erro, exibir a informação 
    })*/
})

