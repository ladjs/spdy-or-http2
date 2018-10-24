const semver = require('semver');

module.exports = require(semver.gte(process.version, 'v10.10.0')
  ? 'http2'
  : 'spdy');
