import express from 'express'
import path from 'path'

const examRoutes = express.Router()

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

examRoutes.get('/result', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/records.html'))
})

examRoutes.put('/users/:id', (req, res) => {
  res.send(`Update user ${req.params.id}`)
})

examRoutes.delete('/users/:id', (req, res) => {
  res.send(`Delete user ${req.params.id}`)
})


export default examRoutes;