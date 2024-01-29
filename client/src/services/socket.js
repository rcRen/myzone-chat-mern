import { io } from "socket.io-client"

let socket;

if (!socket) {
    socket = io(process.env.SOCKET_URL, {
        autoConnect: true,
        path: "/chat"
    })
}

export {
    socket
}