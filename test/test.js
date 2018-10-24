const test = require('ava');
const semver = require('semver');

const spdyOrHttp2 = require('..');

test('loads correct module', t => {
  t.true(
    spdyOrHttp2 ===
      require(semver.gt(process.version, 'v10.10.0') ? 'http2' : 'spdy')
  );
});
