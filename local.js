const express = require("express");
const app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile('public/addi.html', { root: __dirname });
});

app.listen(5000, () => {
  console.log("Application started and Listening on port 3000");
});


