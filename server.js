const express= require('express');
const morgan= require('morgan');
const mongoose= require('mongoose');
const router= require('./public/api');

const PORT= process.env.PORT || 3000;

const app= express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

