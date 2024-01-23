const express = require('express');
var contactRouter = express.Router();

const {add} = require('../controllers/contact.controllers');

contactRouter.post('/add', add);


module.exports = contactRouter