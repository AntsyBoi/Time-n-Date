const express = require('express')
const app = express()
const port = 8080

app.use(express.static('src'))
app.use(express.static('node_modules/p5/lib/'))
app.listen(port, () => {
  console.log(`Time&Date listening at http://localhost:${port}`)
})
