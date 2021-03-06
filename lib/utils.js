'use strict';

const _ = require('lodash');
const Request = require('./request.js');
const CONST = require('./const.js');

module.exports = {
    fullUrl,
    resultHandle,
    addSuffix,
    removeSuffix,
};

function fullUrl(isSecondBoard, pathname, query = {}) {
    const apiUrl = isSecondBoard ? CONST.secondBord.API_URL : CONST.mainBoard.API_URL;
    return Request.urlFormat(apiUrl, pathname, query);
}

function resultHandle(result, ...focusData) {
    if ('error' === result.status) {
        return { err: result['err-msg'] };
    }

    let data = {};
    focusData.forEach(dataKey_ => {
        const elem = result[dataKey_];
        if (!!elem) {
            data[dataKey_] = elem;
        }
    });
    return data;
}

function addSuffix(str, suffix = '') {
    if (_.includes(str, suffix)) {
        return str;
    }
    return `${str}${suffix}`;
}

function removeSuffix(str, suffix = '') {
    if (_.includes(str, suffix)) {
        str = _.replace(str, suffix, '');
    }
    return str;
}


