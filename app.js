const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const learningRoutes = require('./routes/learningRoutes')
const graphRoutes = require('./routes/graphRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
 
//Init App
  
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type'],
    credentials: true, 
    origin: true
};
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOpts));

//Db Connection

const dbURI = 'mongodb+srv://XFusional:cc1ss7abc@blogcluster.dvlp2.mongodb.net/Learning?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3002))
  .then(() => console.log('Server Started'))
  .catch(err => console.log(err));

app.use('/learning', learningRoutes);
app.use('/graph', graphRoutes);
app.use('/user', userRoutes)