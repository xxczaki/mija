<p align="center">
  <img src="https://i.imgur.com/nBvf1Ju.png" height="150">
  <p align="center">☢️ Console Logger with Emoji Support<p>
  <p align="center">
  <a href="https://travis-ci.org/xxczaki/mija"><img src="https://travis-ci.org/xxczaki/mija.svg?branch=master" alt="Build Status"></a>
  <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>  
</p>
</p>

## Install

```bash
npm install --save mija
```

## Usage

```js
const mija = require('mija');

mija.success('Success!');
```
## API

```js
mija.option(text);
```
or
```js
mija.custom(emoji, text);
```

**option**

Type: `Object`

Any available [option](https://github.com/xxczaki/mija#options).

**text**

Type: `string`

Custom message.

**emoji**

Type: `string`

Custom emoji. Can only be used with `mija.custom`.

## Options

`info`

`warn`

`error`

`success`

`magic`

`inprogress`

`stop`

`repeat`

`experimental`

`danger`

`custom`

### License

MIT
