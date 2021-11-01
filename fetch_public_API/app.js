const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.use(express.static("public"));

require("./data")(app);

app.get("/", (req, res) => {
    // this also works:
    // res.sendFile("index.html", { root: __dirname });
    res.sendFile(__dirname + "/public/frontpage/index.html");
});


// task allow the developer to set the port 
// task start-dev should run on port 8080
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
