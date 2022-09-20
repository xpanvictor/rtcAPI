import {Application} from 'express'
import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from 'src/types/sockets'

import {Server} from 'socket.io'

async function SocketServer(server: any) {
    let io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server)
    io.on('connection', (socket) => {
        console.log('Connected')
        socket.emit('noArg')
        io.on('message', (msg) => {
            console.log('hey, ', msg)
        })
    })
    console.log('socket connected')
}


module.exports = SocketServer