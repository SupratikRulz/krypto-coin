const Block = require('./block');

describe('Block Test', () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = 'fake data';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('sets the `lastHash` to match the ownHash of the last block', () => {
        expect(block.lastHash).toEqual(lastBlock.ownHash);
    });
});

