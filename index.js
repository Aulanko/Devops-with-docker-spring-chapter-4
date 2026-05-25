const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Worlda! this whole pipeline thing works!</h1>')
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})