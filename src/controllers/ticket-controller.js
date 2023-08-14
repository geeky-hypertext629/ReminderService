const TicketService = require('../services/email-service');

const create = async (req,res)=>{
    try {
        const response = await TicketService.createNotification(req.body);

        return res.status(201).json({
            message : `Successfully registered an email reminder`,
            success : true,
            data : response,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            message : `unable to register an email reminder`,
            success : false,
            data : {},
            err : error
        })
    }
}

module.exports = {
    create,
}