import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
//Redux
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
//firebase
import { firestoreDb, storageDb } from '../database/firebase';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {

}

const store = createStore(applyMiddleware(...middlewares));

const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };