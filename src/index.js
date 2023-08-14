const bodyParser = require('body-parser');
const express = require('express');

const {PORT} = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');




const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.post('/api/v1/tickets', TicketController.create)

    app.listen(PORT, ()=>{
        //Syntax for sending email
        // sendBasicEmail(
        //     'support@admin.com',
        //     'subh28909@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you , I like you like support',
        // );

      jobs();
        console.log(`Server started on PORT : ${PORT}`);
     
    })
}

setupAndStartServer();