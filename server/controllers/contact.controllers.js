const {StatusCodes} = require('http-status-codes');
const ContactModel = require('../models/contact.models');

const add = async (req, res, next) => {
    try {
        console.log('Body data:');
        console.log(req.body);

        var savedContact = await ContactModel.create(req.body);
        console.log(savedContact);
        console.log(req.body);

        res.status(StatusCodes.CREATED).json({message:'Contact successfully added!', contact:savedContact});
    }catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:err});
    }
}




module.exports = {
    add
}