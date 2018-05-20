const Block = require('./block');

class Blockchain {

    constructor () {
        this.chain = [Block.genesis()];
    }

    addBlock (data) {
        const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(block);

        return block;
    }

    isValidChain (chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i - 1];

            if (block.lastHash !== lastBlock.ownHash || block.ownHash !== Block.getBlockHash(block)) {
                return false;
            }
        }
        return  true;
    }

    replaceChain (newChain) {
        if (newChain.length <= this.chain.length) {
            console.log('The new chain is not longer than the current chain.');
            return false;
        } else if (!this.isValidChain(newChain)) {
            console.log('The new chain is corrupted.');
            return false;
        } else {
            console.log('Replacing this chain with the new chain!')
            this.chain = newChain;
            return true;
        }
    }
}

module.exports = Blockchain;
