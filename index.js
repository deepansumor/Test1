
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!'+ port)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// sudo chmod -R a+rwx /var/www/html