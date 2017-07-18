# huobi-node

huobi.com SDK

## Install

```shell
npm i git+https://github.com/SuperDBJ/node-huobi.git -S
```

## Quick Start

```shell
const hb = require('node-huobi');

//coin types
let coins = async function () {
    console.log(await hb.market.coins());
}

//btc price
let btcPrice = async function (params) {
    console.log(await hb.market.ticker(CONST.COIN_TYPE.CNY.BTC));
}
```