const express = require('express')

const User = require('./users/model')

const server = express()
server.use(express.json())

server.get('/api/users', (req, res) => {
  User.find()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

server.get('/api/users/:id', (req, res) => {
  const id = req.params.id
  User.findById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

server.post('/api/users', (req, res) => {
  const newUser = req.body
  User.insert(newUser)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

server.put('/api/users/:id', (req, res) => {
  const id = req.params.id
  const changes = req.body
  
  User.update(id, changes)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})

server.delete('/api/users/:id', (req, res) => {
  const id = req.params.id

  User.remove(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})




module.exports = server;
