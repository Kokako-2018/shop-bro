const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const items = require('./routes/shopping') //need to change this line when I create my routes

const server = express()

server.use(bodyParser.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api', items)

module.exports = server