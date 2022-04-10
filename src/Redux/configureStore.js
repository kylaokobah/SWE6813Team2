//The store is where all the states are managed
import { configureStore } from '@reduxjs/toolkit'
import reduxUserReducer from './modules/reduxUser';
import reduxPreviousMatchesReducer from './modules/reduxPreviousMatches';
import reduxQuizReducer from './modules/reduxQuiz';
import reduxFindMatchReducer from './modules/reduxFindMatch';


export const store = configureStore({
    reducer: {
        user: reduxUserReducer,
        previousMatches: reduxPreviousMatchesReducer,
        quiz: reduxQuizReducer,
        findMatch: reduxFindMatchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
