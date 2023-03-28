const Message = require("../model/messageModel");

module.exports.addMessage = async(req, res, next) => {
try {
    const {from, to, message} = req.body;
    const data = await Message.create({
        message:{text:message},
        users:[from, to],
        sender:from
    }); 

    if(data)
    return res.json({msg:"Message Stored Succesfully"});

    return res.json({msg:"Failed At Storing Message"});
} catch (error) {
    next(error);
}
};

module.exports.getAllMessage = async(req, res, next) => {
try {
    const {from, to} = req.body;
    const data = await Message.find({
        users:{$all:[from, to]}
    });

    const projectedMessages = data.map((msg) => {
        return {
            fromSelf: msg.sender.toString() === from,
            message: msg.message.text
        }
    });

    return res.json(projectedMessages);
} catch (error) {
    next(error);
}
};