const express = require('express')
const app = express()
const port = 3000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
