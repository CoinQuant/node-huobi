'use strict';

module.exports = {
    KEYS: {
        accesskey: '0a0b3a8d-00203f32-373a20f3-a8237',
        secretkey: 'bbd1bbef-d48e2292-769b3528-33ab1',
    },
    COIN_TYPE: {
        CNY: {
            BTC: 'btccny',
            LTC: 'ltccny',
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