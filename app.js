const express = require('express');
const path = require('path');
const app =express ();

app.use(express.static("public"));

app.listen (3000,()=>{console.log("El servidor esta corriendo")});

app.get('/',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/home.html'))})

app.post('/',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/home.html'))})

app.get('/login',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/login.html'))})

app.get('/register',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/register.html'))})