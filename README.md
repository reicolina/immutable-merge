# immutable-merge [![Build Status](https://travis-ci.org/reinaldo13/immutable-merge.svg?branch=master)](https://travis-ci.org/reinaldo13/immutable-merge)
Allows you to merge objects without mutating them. It would be the equivalent to:
```javascript
Object.assign({}, object1, object2);
```
The difference is that with `immutable-merge` you won't need to remember to add the `{}` in order to make the "merge" without mutating the original objects.

## Installation
```shell
npm install immutable-merge --save
```

## Usage
```javascript
var merge = require('immutable-merge');

merge({bar: 1}, {baz: 2});
//=> {bar: 1, baz: 2}
```

## Tests
```shell
npm test
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History
* 0.1.0 Initial release
