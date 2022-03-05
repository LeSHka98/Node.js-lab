const express = require('express')
const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json())

const games = [
  {
      "displayName": "Cyberpank 2077",
      "price": "60$",
  },
  {
      "displayName": "SpongeBob SquarePants: Battle for Bikini Bottom – Rehydrated",
      "price": "40$",
  },
  {
      "displayName": "God Of War",
      "price": "50$",
  }
]

app.get('/products', (req, res) => {
  res.send(games)
})

app.post('/products', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(PORT, () => {console.log('server has been started')})