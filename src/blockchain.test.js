const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain Test', () => {
    let blockchain;
    
    beforeEach((() => {
        blockchain = new Blockchain();
    }));

    it('should start with genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('should add new block to the chain', () => {
        const data = 'sample data';
        blockchain.addBlock(data);
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
    });
});