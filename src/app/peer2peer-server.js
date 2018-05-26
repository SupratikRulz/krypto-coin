const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const PEERS = process.env.PEERS ? process.env.PEERS.split(',') || [];

class PeerToPeerServer {
    constructor (blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    listen () {
        const server = new Websocket.Server({
            port: P2P_PORT
        });
        server.on('connection', socket => this.connectSocket(socket));
        console.log(`Listening for peer-to-peer connections on PORT: ${P2P_PORT}`);
    }

    connectSocket (socket) {
        this.sockets.push(socket);
        console.log('Socket Connected!');
    }
}