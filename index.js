'use strict';

const SecondBoard = require('./lib/secondBoard.js');
const MainBoard = require('./lib/mainBoard.js');

module.exports = {
    market: {
        coins,
        ticker,
    },
    board: {
        SecondBoard,
        MainBoard
    }
}

async function coins() {
    const secondBoardCoins = await getSecondBoardCoins();
    return getMainBoardCoins().concat(secondBoardCoins);
}

async function ticker(symbol) {
    if (getMainBoardCoins().includes(symbol)) {
        return await MainBoard.getCurrentPrice(symbol);
    } else {
        return await SecondBoard.getCurrentPrice(symbol);
    }
}

async function getSecondBoardCoins() {
    return (await SecondBoard.currencys()).data || [];
}

function getMainBoardCoins() {
    return ['btc', 'ltc'];
}