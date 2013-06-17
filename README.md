date-ms [![build status](https://secure.travis-ci.org/artjock/date-ms.png)](http://travis-ci.org/artjock/date-ms)
=======
Milliseconds conversion utility, inspired by [guille/ms.js](https://github.com/guille/ms.js)

### Installation

```
npm install date-ms
```
```
bower install date-ms
```

### Usage

```js
var ms = require('date-ms');

ms('1d')        // 86400000
ms('10h')       // 36000000
ms('2h')        // 7200000
ms('1m')        // 60000
ms('5s')        // 5000
ms('100')       // 100

ms(1000)        // 1000
ms()            // +new Date()
ms('')          // +new Date()
ms(null)        // +new Date()
ms(undefined)   // +new Date()

ms( new Date('2013-04-05') )                    // 1365120000000
ms('2013-04-05')                                // 1365120000000
ms('2013-04-09T13:45+0400')                     // 1365500700000
ms('Thu May 16 2013 00:47:53 GMT+0400 (MSK)')   // 1368650873000

ms.tz           // -14400000

// start of day in user's timezone
ms.sod('2013-06-17T12:02:40+0400')   // +new Date('2013-06-17T00:00:00+0400')
```

### License

MIT
