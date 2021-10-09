import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { userReducer } from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

const persistor = persistStore(store);

export { store, persistor }