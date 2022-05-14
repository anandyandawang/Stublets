const express = require('express')
const app = express()
const port = 3000

var loginRouter = require('./routes/login');
var studentsRouter = require('./routes/students');
var listingsRouter = require('./routes/listings');


app.use('/', loginRouter);
app.use('/students', studentsRouter);
app.use('/listings', listingsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
