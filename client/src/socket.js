import { io } from 'socket.io-client'
// const socket = io("http://localhost:8080");

export const connectToSocket = () => {
    socket.on('connect', () => {
        console.info('client:', socket.id)
    })
}

export const joinChat = (user) => {
    socket.emit('join-chat', user._id)
}


export const sendMessageToSocket = (message) => {
    socket.emit("send-message", message)
}

export const getMessageFromSocket = (chat) => {
    const a = socket.on('receive-message', (receivedMessage) => {
    })
    console.info('555', a)

}

export default socket;

