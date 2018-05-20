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
            ownHash = 'TODO-Implement';

        return new this(timestamp, lastHash, ownHash, data);
    }
}

module.exports = Block;

