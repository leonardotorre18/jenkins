const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).json({ message: 'ok' })
})

server.listen(3000, () => console.log('listening'))
