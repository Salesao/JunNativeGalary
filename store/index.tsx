import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import img from "./reducers/imageSlice";
import rootSaga from './SagaWorker/fetchWorkerImg';

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({thunk:false}), sagaMiddleware]

const rootReducer = combineReducers({
    img
})

//то что закоментировано является реализацией GET запроса через Redux saga, но я предпочитаю redux toolkit

const configStore = () => {
    return configureStore({
        reducer:rootReducer,
        // middleware
    })
} 
// sagaMiddleware.run(rootSaga)

export default configStore

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configStore>
export type AppDispatch = AppStore['dispatch']