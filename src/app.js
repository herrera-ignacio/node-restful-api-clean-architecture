const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('RESTful API Boilerplate'))

module.exports.app = app