const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Worlda! this whole pipeline thing works! And now it should also be deployed to render cloud service</h1>')
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})