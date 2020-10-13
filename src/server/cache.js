import { CACHA_TIME } from 'Config'

var LRU = require('lru-cache')
var options = { max: 100, maxAge: CACHA_TIME }
var cache = new LRU(options)

if (!CACHA_TIME) {
  cache = {
    get: () => '',
    set: () => ''
  }
}

export default cache
