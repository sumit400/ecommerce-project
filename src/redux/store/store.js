import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/root.reducer";
import createSagaMiddleware from "redux-saga"
import root from "../saga/root.saga";

const sagaMiddleware = createSagaMiddleware();

export const store =  configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV === 'development' ? true : false,
})

sagaMiddleware.run(root)