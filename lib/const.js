'use strict';

module.exports = {
    KEYS: {
        accesskey: '',
        secretkey: '',
    },
    COIN_TYPE: {
        CNY: {
            BTC: 'btc',
            LTC: 'ltc',
            ETH: 'ethcny',
            ETC: 'etccny',
        }
    },
    mainBoard: {
        API_URL: 'http://api.huobi.com/'
    },
    secondBord: {
        API_URL: 'https://be.huobi.com/',
        DEFAULT_GET_HEADERS: {
            'Accept': 'application/json',
            'Accept-Language': 'zh-CN'
        },
        DEFAULT_POST_HEADERS: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Language': 'zh-CN'
        },
        SignatureMethod: 'HmacSHA256',
        SignatureVersion: 2
    }

}