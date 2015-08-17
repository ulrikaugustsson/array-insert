# array-insert [![Build Status](https://travis-ci.org/ulrikaugustsson/array-insert.svg?branch=master)](https://travis-ci.org/ulrikaugustsson/array-insert)

> Return a new array with a inserted item at index


## Install

```
$ npm install --save array-insert
```


## Usage

```js
var arrayInsert = require('array-insert');

arrayInsert([1, 2, 4], 2, 3);
//=> [1, 2, 3, 4]
```


## API

### arrayInsert(arr, pos, item)

#### arr

*Required*  
Type: `array`

[1, 2, 3]

#### pos

*Required*  
Type: `number`

2

#### item

*Required*  
Type: `any`

4


## License

MIT © [Ulrik Augustsson](http://google.com)
