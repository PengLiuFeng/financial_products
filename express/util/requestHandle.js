//对reques统一处理
var request=require('request');
var os = require('os');
var baseConfig=require('../config/baseConfig.json');

module.exports =function requestHandle(options,callback) {
    request(options,callback);
}

