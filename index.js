
require('dotenv').config()
const express = require('express')
// import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/groww', (req, res) =>{
    res.send('https://groww.in/stocks/user/explore')
})

app.get('/login', (req, res) =>{
    res.send('<h1>please login at groww</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send('<h2>chai or grow</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})