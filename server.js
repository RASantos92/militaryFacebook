// const express = require("express"),
// app = express(),
// port = 8000,
//     cors = require("cors"),
//     server = app.listen(port, () => console.log("The server is all fired up on port 8000")),
// cookieParser = require('cookie-parser');
// ;
// require('dotenv').config();
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());

// const io = require("socket.io")(server);



// // imports file into one line
// require('./server/config/config.database');
// require('./server/routes/user.routes')(app);


// io.on("connection", socket => {
//     console.log(socket.id);
// });

// ****************************************************************************************************** from neilm813 repo

require("dotenv").config();

const express = require("express"),
    cookieParser = require("cookie-parser"),
    cors = require("cors");



const app = express(),
    port = 8000;


app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
require("./server/routes/user.routes")(app);
require("./server/config/config.database")(process.env.DB_NAME);



app.listen(process.env.DB_PORT, () =>
    console.log(`Now ROCKING out on port ${process.env.DB_PORT}`)
);
console.log("Lisa you're killing me!")

