'use strict';
const CONST = require('./lib/const.js');
const Request = require('./lib/request.js');
const SecondBoard = require('./lib/secondBoard.js');

let sb = new SecondBoard();

let test = async function () {
    await sb.historyKline({ symbol: CONST.COIN_TYPE.CNY.ETC, period: '5min', size: 2 });
};

test();