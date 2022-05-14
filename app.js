const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()
const migrations = require('./migrations');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

(async() => {
    try {
        await migrations();
    } catch (e) {
        console.log(`Migrations failed to run. Error: ${e}`);
    }
})();

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
