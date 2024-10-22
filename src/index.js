const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const db = require('./database')

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(cookieParser())

server.get("/",  (req, res) => res.sendFile (__dirname+"/pages/login.html"))
server.get("/ home",  (req, res) => res.sendFile (__dirname+"/pages/home.html"))

server.listen(3333, () => {
    console.log("Servidor online na porta 3333")
})