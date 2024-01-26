import { io } from "socket.io-client"

let socket;

if (!socket) {
    socket = io("http://localhost:8080", {
        autoConnect: true,
        path: "/chat"
    })
}

export {
    socket
}