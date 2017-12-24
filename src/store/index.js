import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
// import createLogger from 'redux-logger'
import { createLogger } from 'redux-logger'
import config from '../../config'


let middleware = [ thunk ]

// console.log(config.debug);
// console.log(process.browser);

// 判断是否是node的环境变量
if (!process.env.__NODE__ && config.debug) {
  // console.log('12313-----');
  middleware = [thunk, createLogger()]
}

export default function configureStore(initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    )
  )

  return store
}
