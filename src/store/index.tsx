import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducers';
import { persistStore, persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, FLUSH } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//! Конфиги для localstorage
const persistConfig = {
    //! Здесь имя ключа который будет хранится в localstorage, по которому мы будем обращаться к localstorage
    key: 'shop',
    //! здесь мы указали что хранить будем в localstorage, можно указать другие
    storage, 
    //! Здесь мы говорим какие редьюсреы будут добавлятся в localstorage
    whitelist: ['cart']

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;