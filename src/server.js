//Servidor
const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//Configurar nunjucks (Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Início e configuração do servidor
server
.use(express.urlencoded({extended: true})) // Permite enviar os dados do form no body (POST) ao invés da url (GET)
.use(express.static("public")) // Configura arquivos estáticos (css, scripts, imagens)
.get("/", pageLanding) // Rotas da Aplicação
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
.listen(5500) // Start do servidor

// Para iniciar o terminal:
// node src/server.js
// Com nodemon: npm run dev