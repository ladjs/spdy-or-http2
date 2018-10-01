const semver = require('semver');

module.exports = require(semver.gt(process.version, 'v8.8.1')
  ? 'http2'
  : 'spdy');
