const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>This is first basic node JS app with Jenkins - 3rd changed made<h1>')
})

app.listen(port, () => {
  console.log('App is listening at http://localhost:' + port)
})

module.exports = app
