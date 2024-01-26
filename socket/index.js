const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    },
    path: "/chat"
});

io.on('connection', (socket) => {
    console.info('socket is connected:', socket.id)

    socket.on("send-message", (receivedMessage) => {
        io.emit('receive-message', receivedMessage)
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} is disconnected`)
    })


})

const PORT = 8080
httpServer.listen(PORT, () => console.log(`Socket is listenning on port ${PORT}!`))