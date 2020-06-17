const express = require("express")
const server = express()

// banco de dados - pegar
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("nlw/public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

// template engine
const nunjucks = require("nunjucks")
nunjucks.configure("nlw/src/views", {
    express: server,
    noCache: true
})


// home
// req: requisicao
// res: resposta
server.get("/", (req, res) => res.render("index.html"))

server.get("/createPoint", (req, res) => {
    // console.log(req.query)
    return res.render("createPoint.html")
})

server.post("/savePoint", (req, res) => {
    // req.body: o corpo do nosso formulario

    // Inserir dados no BD
    const query = `INSERT INTO places(image, name, address, address2, state, cityName, items)
                    VALUES(?, ?, ?, ?, ?, ?, ?);`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.cityName,
        req.body.items
    ]

    function afterInsertData(error) {
        if (error) {
            console.log(error)
            return res.send("Erro no cadastro")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("createPoint.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})


server.get("/search", (req, res) => {
    const search = req.query.search

    if (search == "") {
        return res.render("searchResults.html", { total: 0 })
    }


    function afterSelectData(error, rows) {
        if (error) {
            return console.log(error)
        }

        const total = rows.length
        return res.render("searchResults.html", { places: rows, total: total })
    }
    const select = `SELECT * FROM places WHERE cityName LIKE '%${search}%'`
    db.all(select, afterSelectData)
})
server.listen(3000)

