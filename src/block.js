const SHA256 = require('crypto-js/sha256');

class Block {
    constructor (timestamp, lastHash, ownHash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.ownHash = ownHash;
        this.data = data;
    }

    toString () {
        return `BLOCK-
            TIMESTAMP: ${this.timestamp}
            LAST HASH: ${this.lastHash.substring(0, 10)}
            OWN HASH : ${this.ownHash.substring(0, 10)}
            DATA     : ${this.data}`;
    }

    static genesis () {
        return new this('krypto epoch', '__NO_HASH__', 'F1R$T_#@$#', []);
    }

    static mineBlock (lastBlock, data) {
        const timestamp = Date.now(),
            lastHash = lastBlock.ownHash,
            ownHash = Block.makeHash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, ownHash, data);
    }

    static makeHash (timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
}

module.exports = Block;

