const express = require('express')
const fetch = require('node-fetch')
const app = express()

const CLIENT_ID = 641665395413090319
const CLIENT_SECRET = process.env.OAUTH_SECRET
const REDIRECT_URI = 'http://localhost:3000/oauth'

app.use(express.json())

app.get('/oauth', async (req, res) => {
  let ACCESS_TOKEN = req.query.code

  // await fetch('https://discordapp.com/api/oauth2/token', {
  //   method: 'post',
  //   body: JSON.stringify({
  //     client_id: CLIENT_ID,
  //     client_secret: CLIENT_SECRET,
  //     grant_type: 'client_credentials',
  //     code: ACCESS_TOKEN,
  //     redirect_uri: REDIRECT_URI,
  //     scope: 'guilds identify'
  //   }),
  //   headers: { 'Content-Type': 'application/json' },
  // })
  // .then(res => res.json())
  // .then(json => console.log(json))

  res.sendStatus(200)

  console.log(req.query)
})

app.post('/test', (req, res) => {
  console.log(req.body)
})

app.get('/login', (req, res) => {
  res.redirect('https://discordapp.com/api/oauth2/authorize?client_id=641665395413090319&response_type=token&scope=identify%20guilds')
})

app.listen(3000, () => {
  console.log('Listening on *:3000')
})