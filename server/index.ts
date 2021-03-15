import express from 'express'
import * as dotenv from 'dotenv'
//For environment variables
dotenv.config()
import apiRouter from './Routes';
import cors from 'cors'

const app = express()

// Body Parser middleware
app.use(express.json())

// CORS
app.use(cors());

// Routes goes here
app.use('/api', apiRouter);

const port = process.env.PORT || 5000 

app.listen(port, () => console.log(`Server started on port : ${port}`))