const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const primeness = require('./primeness');

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...primeness
};