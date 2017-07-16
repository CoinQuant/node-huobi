'use strict';
var Request = exports;
const url = require('url');
const _ = require('lodash');
const { request } = require('urllib');

Request.urlFormat = function (host, pathname, query) {
    return url.format({ host, pathname, query });
}

Request.$ = async function (endpoint, query, customOption) {
    const defaultOption = {
        contentType: 'json',
        dataType: 'json',
        timeout: 5000,
        timing: true
    };
    let option = defaultOption;
    if (customOption) {
        option = _.assign(defaultOption, customOption);
    }
    return request(endpoint, option)
        .then(res => {
            console.log(res.data, res.res.timing);
            return res.data;
        })
        .catch(err => {
            console.warn(err);
            return null;
        });
}
