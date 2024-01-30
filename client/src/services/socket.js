import { io } from "socket.io-client"

let socket;

if (!socket) {
    socket = io(process.env.REACT_APP_SOCKET_URL, {
        autoConnect: true,
        path: "socket/chat"
    })
}

export {
    socket
}