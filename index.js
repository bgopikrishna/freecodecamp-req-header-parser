const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

app.get("/api/whoami", (req, res) => {
    let output = parseHeader(req);
    res.send(output)
});

const port = process.env.PORT || 3000;
const listener = app.listen(port, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


function parseHeader(req) {
    let output = {
        ipaddress: req.ip.substr(7),
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    };
    return output;
}

