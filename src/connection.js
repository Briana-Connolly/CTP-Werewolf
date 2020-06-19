const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
    console.log('Connect has been made!');
}).on('error', function(error){
    console.log('Connection error'.error);
});