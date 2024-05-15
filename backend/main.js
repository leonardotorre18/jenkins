const express = require('express')

require('dotenv').config()

const server = express()

server.get('/', (req, res) => {
    res.status(200).json({ message: 'ok' })
})

server.listen(process.env.PORT, () => console.log('listening'))
