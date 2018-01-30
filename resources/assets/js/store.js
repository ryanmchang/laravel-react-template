import { applyMiddleware, createStore } from 'redux';

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';
import reducer from "./reducers";
import { persistStore } from 'redux-persist'


// promise middleware automatically fires
// action types PENDING, FULFILLED, or REJECTED when appropriate
const middleware = applyMiddleware(promise(), thunk, createLogger());

export default function configureStore () {
    let store = createStore(reducer, middleware);
    let persistor = persistStore(store);

    return { persistor, store }
}
