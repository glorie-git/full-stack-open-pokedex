const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3300

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok')
})

// middleware to catch any un configured endpoints
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port', PORT)
})
