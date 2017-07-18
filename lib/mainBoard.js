'use strict';

const utils = require('./utils.js');
const CONST = require('./const.js');
const Request = require('./request.js');

class MainBoard {
    constructor(accessKey = '', secretKey = '') {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

    static async ticker(symbol) {
        const pathname = `/staticmarket/ticker_${symbol}_json.js`;
        const uri = utils.fullUrl(false, pathname);
        const result = await Request.$(uri);
        return utils.resultHandle(result, 'ticker');
    }

    static async getCurrentPrice(symbol) {
        const ticker = await this.ticker(symbol);
        if (!!ticker && !!ticker.ticker) {
            return ticker.ticker.last;
        }
        return NaN;
    }
}

module.exports = MainBoard;