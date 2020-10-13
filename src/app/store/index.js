import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

const middleware = [thunk]

// 如果是在客户端环境，并且是开发模式，那么打印redux日志
if (process.env.NODE_ENV === 'development' && __CLIENT__) {
  middleware.push(createLogger())
}

export default function configureStore(initialState = {}) {
  const store = createStore(combineReducers(rootReducer), initialState, compose(applyMiddleware(...middleware)))

  return store
}
