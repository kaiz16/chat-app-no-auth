const express = require('express');
const router = express.Router()
const { Messages } = require('../models/messages.js')

// Get messages
router.get('/', async (req, res) => {
    let messages = await Messages.find()

    res.status(200).send(messages)
})

// send new message
router.post('/create', async (req, res) => {
    let { message, username } = req.body
    try {
        let newMessage = new Messages({
            username: username,
            message: message
        })

        newMessage.save()

        res.status(200).send(newMessage)
    } catch (error) {
        return res.status(400).send('Error sending message.')
    }
})

//Deleting all the messages
router.delete('/', (req, res) => {
    Messages.deleteMany()
        .then(res => res.json('Deleted'))
        .catch(err => res.json(err))
})


module.exports = router