'use strict';
const CONST = require('../lib/const.js');
const Request = require('../lib/request.js');
const SecondBoard = require('../lib/secondBoard.js');
const MainBoard = require('../lib/mainBoard.js');

const hb = require('../index.js');


let sb = new SecondBoard();
let mb = new MainBoard();

let test = async function () {
    console.log(await sb.kline({ symbol: CONST.COIN_TYPE.CNY.ETC, period: '5min' }));
};

let currencys = async function () {
    console.log(await SecondBoard.currencys());
}
let detailMergedTest = async function (params) {
    console.log(await SecondBoard.detailMerged(CONST.COIN_TYPE.CNY.ETC));
}

let etcPrice = async function (symbol) {
    console.log(await hb.market.ticker(CONST.COIN_TYPE.CNY.ETC));
}

let btcPrice = async function (params) {
    console.log(await hb.market.ticker(CONST.COIN_TYPE.CNY.BTC));
}

let coins = async function (params) {
    console.log(await hb.market.coins());
}

btcPrice();