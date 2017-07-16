'use strict';

const _ = require('lodash');
const request = require('request')
const md5 = require('md5')

module.exports = {

};

function sign(params, secretKey) {
    let unorderd = _.cloneDeep(params)
    unorderd['secret_key'] = secretKey

    let ordered = []

    Object.keys(unorderd).sort().forEach(key => {
        ordered.push(`${key}=${unorderd[key]}`)
    })

    return md5(ordered.join('&')).toLowerCase();
}

function request(params, extra = null) {

    params['access_key'] = this.accessKey
    params['created'] = Math.floor(Date.now() / 1000) // 这里的时间格式只有10位
    params['sign'] = sign(params)

    _.assign(params, extra)

    let opts = {
        url: this.url,
        method: "POST",
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        strictSSL: false,
        form: params
    }

    return new Promise((resolve, reject) => {

        request(opts, (err, res, body) => {
            try {
                let data = JSON.parse(body)

                if (_.isNil(data.code))
                    resolve(data)
                else
                    reject(data)
            } catch (err) {
                reject(err)
            }
        })
    });

}