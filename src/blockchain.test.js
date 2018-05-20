const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain Test', () => {
    let blockchain,
        blockchain2;
    
    beforeEach((() => {
        blockchain = new Blockchain();
        blockchain2 = new Blockchain();
    }));

    it('should start with genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('should add new block to the chain', () => {
        const data = 'sample data';
        blockchain.addBlock(data);
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
    });

    it('should validate a valid chain', () => {
        blockchain2.addBlock('fake data');
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(true);
    });

    it('should invalidate a chain with corrupt genesis block', () => {
        blockchain2.chain[0].data = 'corrupt data';
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(false);
    });

    it('should invalidate a corrupt chain', () => {
        blockchain2.addBlock('good data');
        blockchain2.chain[1].data = 'data corruption taking place';
        expect(blockchain.isValidChain(blockchain2.chain)).toBe(false);
    });
});