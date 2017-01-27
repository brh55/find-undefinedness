# find-undefinedness [![Build Status](https://img.shields.io/travis/brh55/find-undefinedness.svg?style=flat-square)](https://travis-ci.org/brh55/find-undefinedness) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
> Return dotted keys containing `undefined` values within an object including nested objects
>
> **findUndefindness({}) => [ keys ]**

## Install

```
$ npm install --save find-undefinedness
```

## Usage
### Flat Objects
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
### Nested Objects

```js
const findUndefinedness = require('find-undefinedness');

const user = {
    name: undefined,
    github: {
        username: 'brh55',
        repositories: {
            personal: 43,
            private: undefined
        },
        followers: {
            username: 'rightlag',
            repositories: {
                personal: 20,
                private: undefined
            },
            stars: 1
        },
        stars: 100
    },
    emoji: undefined
}
findUndefinedness(user);
//=> [ 'name', 'github.repositories.private', 'github.followers.repositories.private', 'emoji' ]
```

## API

### findUndefinedness(object)

* Returns dot notation keys containing `undefined` for inserted object.*

#### object | [`<object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Normal_objects_and_functions)

Object in question containing keys with undefinedness

## License

MIT © [Brandon Him](https://github.com/brh55)
