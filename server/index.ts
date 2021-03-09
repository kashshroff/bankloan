import express from 'express'
import * as dotenv from 'dotenv'
import apiRouter from './Routes';
//For environment variables
dotenv.config()


const app = express()

// Body Parser middleware
app.use(express.json())

// Routes goes here
app.use('/', (req, res) => {
  res.send({
    message: "You will get a loan someday"
  })
})
app.use('/api', apiRouter);

const port = process.env.PORT || 5000 

app.listen(port, () => console.log(`Server started on port : ${port}`))