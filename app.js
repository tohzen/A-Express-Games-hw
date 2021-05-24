const express = require('express');

const logger = require('morgan');
const path = require('path')
const indexRouter = require('./router/indexRouter')
const gameRouter = require('./router/gameRouter')

const app = express()



app.use(express.json())

app.use('/', indexRouter)
app.use('/api/game', gameRouter)



app.listen(3000, function () {
    console.log(`Server is now running on port 3000`);
  });













