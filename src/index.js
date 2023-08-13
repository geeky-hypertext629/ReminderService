const bodyParser = require('body-parser');
const express = require('express');

const {PORT} = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service')

const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT, ()=>{
        sendBasicEmail(
            'support@admin.com',
            'subh28909@gmail.com',
            'This is a testing email',
            'Hey, how are you , I like you like support',
        );
        console.log(`Server started on PORT : ${PORT}`);
     
    })
}

setupAndStartServer();