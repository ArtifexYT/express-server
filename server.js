const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT, function() {
    console.log(`Express server has been launched on port ${listener.address().port}`);
});