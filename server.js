const express = require("express"),
    app = express(),
    port = 8000,
    cors = require("cors"),
    server = app.listen(port, () => console.log("The server is all fired up on port 8000"));

app.use(cors());
app.use(express.json());
const io = require("socket.io")(server);

// imports file into one line
require('./server/config/config.database');
require('./server/routes/user.routes')(app);
io.on("connection", socket => {
    console.log(socket.id);


    
});