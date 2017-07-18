'use strict';

const utils = require('./utils.js');
const CONST = require('./const.js');
const Request = require('./request.js');

class SecondBoard {
    constructor(accessKey = '', secretKey = '') {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

    //获取最新K线数据
    static async kline({ symbol, period }) {
        const pathname = 'market/kline';
        const uri = utils.fullUrl(true, pathname, { symbol, period });
        const result = await Request.$(uri);
        return utils.resultHandle(result, 'tick');
    }

    //获取某币{symbol}的当前价格
    static async getCurrentPrice(symbol) {
        const k5min = await this.kline({ symbol, period: '5min' });
        if (!!k5min.tick) {
            return k5min.tick.close;
        }
        return NaN;
    }

    //获取多跟k线数据
    static async historyKline({ symbol, period, size }) {
        const pathname = '/market/history/kline';
        const uri = utils.fullUrl(true, pathname, { symbol, period, size });
        const result = await Request.$(uri);
        return utils.resultHandle(result, 'tick');
    }

    //获取聚合行情
    static async detailMerged(symbol) {
        const pathname = '/market/detail/merged';
        const uri = utils.fullUrl(true, pathname, { symbol });
        const result = await Request.$(uri);
        return utils.resultHandle(result, 'tick');
    }

    //获取创业板支持的币种
    static async currencys() {
        const pathname = '/v1/common/currencys';
        const uri = utils.fullUrl(true, pathname);
        const result = await Request.$(uri);
        return utils.resultHandle(result, 'data');
    }
}

module.exports = SecondBoard;