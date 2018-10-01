# spdy-or-http2

[![build status](https://img.shields.io/travis/niftylettuce/spdy-or-http2.svg)](https://travis-ci.org/niftylettuce/spdy-or-http2)
[![code coverage](https://img.shields.io/codecov/c/github/niftylettuce/spdy-or-http2.svg)](https://codecov.io/gh/niftylettuce/spdy-or-http2)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/niftylettuce/spdy-or-http2.svg)](LICENSE)

> Node.js ponyfill for HTTP/2 support (uses native http2 module or falls back to spdy)


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install spdy-or-http2
```

[yarn][]:

```sh
yarn add spdy-or-http2
```


## Usage

```js
const SpdyOrHttp2 = require('spdy-or-http2');

const spdyOrHttp2 = new SpdyOrHttp2();

console.log(spdyOrHttp2.renderName());
// script
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <https://niftylettuce.com> |


## License

[MIT](LICENSE) © [Nick Baugh](https://niftylettuce.com)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
