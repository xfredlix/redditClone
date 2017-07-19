import { applyMiddleware, createStore, compose} from "redux"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk)

export default createStore(
  reducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
