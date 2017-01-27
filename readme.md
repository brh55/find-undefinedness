# find-undefinedness [![Build Status](https://img.shields.io/badge/travis/brh55/find-undefinedness.svg?branch=master)](https://travis-ci.org/brh55/find-undefinedness) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
> Find undefined values in a object
>
> **findUndefindness({}) => [ keys ]**

## Install

```
$ npm install --save find-undefinedness
```

## Usage

```js
const findUndefinedness = require('find-undefinedness');

const config = {
    token: undefined,
    username: 'brh55',
    emoji: undefined
}
findUndefinedness(config);
//=> '[ 'token', 'emoji']
```

## API

### findUndefinedness(object)

#### object | [`<object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Normal_objects_and_functions)

Object in question.

## License

MIT © [Brandon Him](https://github.com/brh55)