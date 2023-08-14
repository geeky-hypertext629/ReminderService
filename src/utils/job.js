const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('./../config/emailConfig');

 /*
 10:00 am
 Every 5 mins
 We will check if there are any pending emails which was expected to be sent
 by now and is pending
 */

 const setupJobs = ()=>{
    cron.schedule('*/1 * * * *', async () => {
        // console.log('running a task every five minutes');
        const response = await emailService.fetchPendingEmails();
        response.forEach((email)=>{
          // emailService.sendBasicEmail('subh28909jsr@gmail.com',
          // email.recepientEmail,
          // email.subject,
          // email.content);
          sender.sendMail({
            from: "subh28909js@gmail.com",
            to: email.recepientEmail,
            subject: email.subject,
            text: email.content,
          },async (err,data) =>{
            if(err)
            {
              console.log(err);
            }
            else{
              console.log(data);
              await emailService.updateTicket(email.id,{status : "SUCCESS"})
            }
          })
        });
        console.log(response);

      });
 }

 module.exports = setupJobs;