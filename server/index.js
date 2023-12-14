const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const io = require('socket.io')(http, {
	cors: {
		origin: 'http://localhost:5173',
	},
})
const PORT = 3333

app.use(cors({ origin: 'http://localhost:5173' }))

io.on('connection', socket => {
	console.log(`${socket.id} user connected`)

	socket.on('message', data => {
		io.emit('response', data)
		console.log(data)
	})

	io.on('disconnect', () => {
		console.log(`${socket.id} disconnect`)
	})
})

app.get('api', (req, res) => {
	res.json({
		message: 'Hello',
	})
})

http.listen(PORT, () => {
	console.log('Server start!')
})
