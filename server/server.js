const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const contactRouter = require('./routes/contact.routes')



app.use(express.json());
app.use('/api/v1/contactapp', contactRouter);

mongoose.connect(process.env.DB)
.then(() => {
    app.listen(process.env.PORT, ()=> {
        console.log(`Server listening on port ${process.env.PORT}`);
    })
})
.catch(err => {
    console.error(err);
})


