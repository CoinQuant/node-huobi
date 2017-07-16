'use strict';

const Request = require('./request.js');

const CONST = require('./const.js');

class SecondBoard {
    constructor(accessKey = '', secretKey = '') {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

    //获取最新K线数据
    async kline({ symbol, period }) {
        const pathname = 'market/kline';
        const uri = fullUrl(pathname, { symbol, period });
        return await Request.$(uri);
    }

    //获取多跟k线数据
    async historyKline({ symbol, period, size }) {
        const pathname = '/market/history/kline';
        const uri = fullUrl(pathname, { symbol, period, size });
        return await Request.$(uri);
    }

    //获取聚合行情
    async detailMerged(symbol) {
        const pathname = '/market/detail/merged';
        const uri = fullUrl(pathname, { symbol });
        return await Request.$(uri);
    }
}

function fullUrl(pathname, query) {
    const apiUrl = CONST.secondBord.API_URL;
    return Request.urlFormat(apiUrl, pathname, query);
}

module.exports = SecondBoard;