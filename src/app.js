require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger/swagger.json')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.json())

// Configure cors to accept traffic from all origins
const corsOptions = {
  origin: '*'
};

console.log('hello')
console.log('hello2')

app.use(cors(corsOptions));

// Landing Page for the webservice
app.get('/', (req,res)=>res.send('Landing Route for Preprocessing Webservice test #test'))

//Routing /api requests to the api router
const apiRoutes = require('./routes/api-routes')
app.use('/api', apiRoutes)

//Routing to Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Catch unrouted requests to 404
app.use((req, res, next) => {
    const error = new Error('Route not Found')
    error.status = 404
    next(error)
  })

app.listen(port, ()=>{
    console.log(`Preprocessing Webservice listening in port ${port}`)
})