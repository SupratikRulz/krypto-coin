const express = require('express');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const blockchain = new Blockchain();

app.get('/blocks', (req, res) => {
    res.json(blockchain.chain);
});

app.listen(HTTP_PORT, () => console.log(`Listening on PORT ${HTTP_PORT}`));
