const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//DEFINE THE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath =path.join (__dirname, '../public')
const viewsPath =path.join (__dirname, '../templates/views')
const partialsPath =path.join (__dirname, '../templates/partials')

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs,registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=> {
  res.render('index'), {
    title: 'Weather',
    name: 'Monica'
  }

app.listen(3000, () =>{
  console.log('Server is up and running on port 3000 at PPU')
})


//Homework Assignment
//Create a Route for Support
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//DEFINE THE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath =path.join (__dirname, '../public')
const viewsPath =path.join (__dirname, '../templates/views')
const partialsPath =path.join (__dirname, '../templates/partials')

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs,registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=> {
  res.render('index', {
    title: 'SUPPORT',
    description: 'Please contact me if needed any help'
  })
})

app.listen(3000, () =>{
  console.log('Server is up and running on port 3000 at PPU')
})
//Create a route for About
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//DEFINE THE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath =path.join (__dirname, '../public')
const viewsPath =path.join (__dirname, '../templates/views')
const partialsPath =path.join (__dirname, '../templates/partials')

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs,registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=> {
  res.render('index', {
    title: 'ABOUT'
    description: 'WELCOME TO MY WEATHER APP! ENJOY!'
  })
})

app.listen(3000, () =>{
  console.log('Server is up and running on port 3000 at PPU')
})

//404 ROUTE
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//DEFINE THE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath =path.join (__dirname, '../public')
const viewsPath =path.join (__dirname, '../templates/views')
const partialsPath =path.join (__dirname, '../templates/partials')

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs,registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=> {
  res.render('index', {
    title: '404'
    description: 'ERROR'
  })
})

//Weather ROUTE
app.get('/weather', (req, res) =>{
  if(!req.query.address){
    error:'You must provide an address'
    })
  }
  geocode(req.query.address, (error, {latitude, longitude, location}) =>{
    if(error){
      return res.send({error})
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }

      res.send({
         forecast: forecastData,
         location
      })
    }
  }
})

// Products ROUTE
app.get('/products', (req, res) => {
  if(!req.query.search)
  return res.send({
    error: 'You must provide a search Query'
  })

  console.log(req.query.search)
  res.send({
    products:[]
  })
})

app.listen(3000, () =>{
  console.log('Server is up and running on port 3000 at PPU')
})
