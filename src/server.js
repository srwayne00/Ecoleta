//Criação do servidor

const express = require("express")
const server = express()

//Pegar o banco de dados da oasta indicada
const db = require("./database/db")


//config pasta public
server.use(express.static("public"))

//habitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({exrended: true}))


//Utilizando a template engine (nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
}) 


//config caminhos da aplicação //pag inicial //req requisição //res resposta
server.get("/", (req, res) => {
    
    //re.query: Query Strings da nossa URL
    //console.log(req.query)
    return res.render("index.html", { title: "Um titulo"})
})

//chamar o arquivo create-point
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //req.body: O corpo do nosso formulario
    //console.log(req.body)
    //Inserir dados no banco de dados
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
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items
        ]

        function afterInsertData(err) {                 // depois de inserido os dados
            if (err) {  
                console.log(err)                                //se houver erro
                return res.send("Erro no cadastro")             // Retorne a informação com o erro
            }
                
                console.log("Cadastrado com sucesso!")  //Se não ouver erro retorne esse aviso
                console.log(this)                       //log oculta referenciando o rodar (run)
   
   
            return res.render("create-point.html", {saved: true})
        }
        db.run(query, values, afterInsertData)          //banco de dados roda as query, depois as values e por ultimo a afterInsertData
       
})

//chamar o aquivo search-results
server.get("/search", (req, res) => {

    
    const search = req.query.search     //para o caso do campo de pesquisa estar vazio
        if(search == "") {              //se a pesquisa estiver vazia
            return res.render("search-results.html", {total: 0})        
        }


    //Inserindo dados pelo navegador e não pelo html
    //1° Pegar os dados do banco de dados 
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) { //pesquisa em all(todo) o banco de dados selecionando tudo(*) da tabela places
        if(err) {                                       //Se nao encontrar 
            return console.log (err)                    //retorna erro
        }
        
        //console.log(rows)
        const total = rows.length  //length é um propriedade add ao tipo array e conta os elementos dentro do array
        //Mostrar a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total})
    })   

    
})

//Ligar o servidor
server.listen(3000)
