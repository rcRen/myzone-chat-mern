const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let usersInChat = []

const loginNewUser = (userId, socketId) => {
    !usersInChat.some((user) => user.userId === userId || user.socketId === socketId)
        && usersInChat.push({ userId, socketId })
};

const getUser = (userId) => {
    return usersInChat.find((user) => user.userId === userId)
}

io.on('connection', (socket) => {

    console.info('socket is connected:', socket.id)

    socket.on('join-chat', (userId) => {
        loginNewUser(userId, socket.id)
        console.info(usersInChat)
    });

    socket.on("send-message", (receivedMessage) => {
        const { chat, sender } = receivedMessage
        const receiverId = chat.members.find((member) => member._id !== sender._id)._id
        const receiver = getUser(receiverId)
        io.to(receiver.socketId).emit('receive-message', receivedMessage)


    });


    socket.on('offline', (user) => {
        console.log(`user ${user._id} is offline.`)
    })


})

const PORT = 8080
httpServer.listen(PORT, () => console.log(`Socket is listenning on port ${PORT}!`))