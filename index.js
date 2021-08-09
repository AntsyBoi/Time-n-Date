const express = require('express')
const app = express()
<<<<<<< Updated upstream
const port = 80
=======
const port = process.env.PORT || 8080
>>>>>>> Stashed changes

app.use(express.static('src'))
app.use(express.static('node_modules/p5/lib/'))
app.listen(port, () => {
  console.log(`Time&Date listening at http://localhost:${port}`)
})
