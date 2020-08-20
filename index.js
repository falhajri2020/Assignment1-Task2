const express= require('express');
const app =express();

// define static folder
app.use(express.static('public'));

// Database connection
require('./config/db')();

// routes

app.use(require('./middleware/dump'));
app.use('/songs',require('./routes/songs'));


const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on PORT ${PORT}`));