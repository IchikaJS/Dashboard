import express from 'express'
import path from 'path'
import { Socket } from './util/socket'

const app = express()
const soc = new Socket()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

// temporarily
app.get('/user', (req, res) => {
  res.sendStatus(200)
  soc.fetchUser()
})

app.get('/oauth', (req, res) => {
  soc.handleCode(req.query.code, 'http://localhost:8000/oauth', 'guilds identify')
  res.sendStatus(200)
})

app.listen(8000, () => {
  console.log('Listening on *:8000')
})

module.exports = express