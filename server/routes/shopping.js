const express = require('express')
const router = express.Router()

const db = require('../dbOne')

router.get('/', function (req, res) {
  res.json(db.getItems())
})

router.post('/', function (req, res) {
  db.saveItem(req.body)
  // Normally saveItem would be async and you'd
  // have to sendStatus in the .then, but in this
  // implementation, the data is stored in server
  // memory and is done synchronously.
  res.sendStatus(200)
})

router.delete('/', function (req, res) {
  db.removeItem(req.body)
  res.sendStatus(200)
})

router.put('/', (req, res) => { 
  db.updateItem(req.body) // is complaining it didn't know what this function was... (go to db)
  res.sendStatus(204)
})


module.exports = router