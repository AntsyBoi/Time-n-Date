// Imports libraries
const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')
const app = express()

let port = process.env.PORT || 443 // Sets Default port

let httpsMode = false // Set to false if you want to use HTTP instead of HTTPS

app.use(express.static('src')) // Hosts all the files in the source folder
if(httpsMode === true){
  const sslOptions = {
    key: fs.readFileSync('key.key'), // Sets the location of the Private key
    cert: fs.readFileSync('cert.pem') // Sets the location of the certificate
  }; // If httpsMode is false, it sets sslOptions to state where the keys are located and allows use of them later on
  https.createServer(sslOptions, app).listen(port, () => {
    console.log(`Time&Date listening at port ${port}`) // Outputs to the console that "Time&Date" (The name of the app) is listening to requests at a certain port
  })
} else{ // End of HTTPS server, beginning of HTTP server
  port = process.env.PORT || 80 // Redefines the default port
  http.createServer(app).listen(port, () => { // Creates HTTP server
    console.log(`Time&Date listening at http://localhost:${port}`) // Outputs to the console that "Time&Date" (The name of the app) is listening to requests at a certain port
  }) // End of HTTP server
}
