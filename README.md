# umi-plugin-hash

[![NPM version](https://img.shields.io/npm/v/umi-plugin-hash.svg?style=flat)](https://npmjs.org/package/umi-plugin-hash)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-hash.svg?style=flat)](https://npmjs.org/package/umi-plugin-hash)

modify hash

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-hash', {
      hash: RELEASE_VERSION // 修改的hash
    }],
  ],
}
```

## Options

TODO

## LICENSE

MIT
