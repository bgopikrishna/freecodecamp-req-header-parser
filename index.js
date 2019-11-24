const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

app.get("/", (req, res) => {
    let output = {
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
        }
    res.send(output)
});

const port = process.env.PORT || 3000;
const listener = app.listen(port, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
