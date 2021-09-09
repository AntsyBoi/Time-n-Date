const fs = require('fs')
const https = require('https')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 80
https.createServer([], app).listen(443)
app.use(express.static('src'))
app.use(express.static('node_modules/p5/lib/'))
app.listen(port, () => {
  console.log(`Time&Date listening at http://localhost:${port}`)
})
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.key'))
}

https.createServer(httpsOptions, app)
