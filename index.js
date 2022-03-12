const http = require('http')
const PORT = process.env.PORT || 5000;

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

const app = http.createServer((req, res) => { send(req, res) })

function getReqData(req) {
  return new Promise((resolve, reject) => {
      try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            resolve(JSON.parse(body));
        });
      } catch (error) {
          reject(error);
      }
  });
}

function send(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8' 
  })
  res.send = (data) => res.end(JSON.stringify(data))
}

app.on('request', async (req, res) => {
  if (req.url == '/products') {
    if (req.method  === 'POST') {
      let newgame = await getReqData(req)
      games.push(newgame)
      res.send(games)
    } 
    if (req.method === 'GET') {
      res.send(games)
    }
  }
  else res.end()
})

app.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${PORT}`)
})