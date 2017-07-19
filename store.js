import { applyMiddleware, createStore, compose} from "redux";
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk);

const store = createStore(
  reducer,
  compose(
    middleware,
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

persistStore(store, {storage: AsyncStorage});

export default store;