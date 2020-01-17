const express= require('express');
const mongoose= require('mongoose');
const routes= require('./routes.js'); 
const cors= require('cors');
const http= require('http');
const {setupWebsocket} = require('./websocket')

const app= express();
const server= http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://matheus:matheus@cluster0-w02cq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
    useCreateIndex: true,
});
app.use(cors());
app.use(express.json() );
app.use(routes);

server.listen(3333);