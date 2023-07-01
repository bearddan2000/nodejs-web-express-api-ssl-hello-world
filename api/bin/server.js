var app = require('express')();
const https = require('https');
const fs = require('fs');

const data = [
    { breed: "Am Bulldog", color: "White", id: 1 },
    { breed: "Blue Tick", color: "Grey", id: 2 },
    { breed: "Labrador", color: "Black", id: 3 },
    { breed: "Gr Shepard", color: "Brown", id: 4 }
];
const httpsServer = https.createServer({
    key: fs.readFileSync('/app/cert/server.key'),
    cert: fs.readFileSync('/app/cert/server.crt'),
  }, app);

// middleware called before each route
app.use(function(req, res, next) {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', function(req, res) {
    res.json(data);
    //res.send('Hello World');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
