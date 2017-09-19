const
  express = require('express'),
  ejs = require('ejs'),
  ejsLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  app = express(),
  languageRoutes = require('./routes/language.js')

mongoose.connect('mongodb://localhost/web-dev-proj', (err) => {
  if(err) return console.log(err)
  console.log('Connected to MongoDB (web-dev-proj)')
} )

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.use(ejsLayouts)


app.get('/', (req, res) => {
  res.send("HELLO WORLD!")
})

app.use('/languages', languageRoutes)


app.listen(3000, (err) => {
  console.log(err || "Server running on 3000")
})
