'use strict';

const SecondBoard = require('./lib/secondBoard.js');
const MainBoard = require('./lib/mainBoard.js');
const utils = require('./lib/utils.js');

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

async function ticker(symbol, suffix = 'cny') {
    symbol = utils.removeSuffix(symbol, suffix);
    if (getMainBoardCoins().includes(symbol)) {
        return await MainBoard.getCurrentPrice(symbol, suffix);
    } else {
        return await SecondBoard.getCurrentPrice(symbol, suffix);
    }
}

async function getSecondBoardCoins() {
    return (await SecondBoard.currencys()).data || [];
}

function getMainBoardCoins() {
    return ['btc', 'ltc'];
}