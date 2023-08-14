const bodyParser = require('body-parser');
const express = require('express');

const {PORT} = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');

const cron = require('node-cron');




const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT, ()=>{
        //Syntax for sending email
        // sendBasicEmail(
        //     'support@admin.com',
        //     'subh28909@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you , I like you like support',
        // );

        cron.schedule('*/2 * * * *', () => {
            console.log('running a task every two minutes');
          });
        console.log(`Server started on PORT : ${PORT}`);
     
    })
}

setupAndStartServer();