//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "13988998899",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniela Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "14988998899",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Danilo Alves",
        avatar: "https://avatars2.githubusercontent.com/u/31660201?s=460&u=0b27bfd64282fea1121f47b873336ee4fbf35d6a&v=4",
        whatsapp: "15988998899",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }   
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//Funcionalidades

function getSubject(subjectId) {
    const position = +subjectId - 1 //O sinal de mais é para garantir que seja número
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res) {

    //Adicionar os dados recebidos na lista de proffys
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    
    if(isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//Configurar nunjucks (Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Início e configuração do servidor
server.use(express.static("public")) // Configura arquivos estáticos (css, scripts, imagens)
.get("/", pageLanding) // Rotas da Aplicação
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500) // Start do servidor

// Para iniciar o terminal:
// node src/server.js
// Com nodemon: npm run dev