import { io } from "socket.io-client"
const REACT_APP_SOCKET_URL = process.env.REACT_APP_ENV === 'development' ? `${process.env.REACT_APP_SOCKET_URL}` : '/'

let socket;

if (!socket) {
    socket = io(REACT_APP_SOCKET_URL, {
        autoConnect: true,
        path: "/socket/chat"
    })
}

export {
    socket
}