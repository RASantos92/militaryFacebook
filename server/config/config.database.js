const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/user",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("You are now in the mainframe!!"))
.catch(() => console.log("You ain't connected! Try again JACK! "))








