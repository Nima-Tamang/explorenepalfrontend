import { configureStore } from "@reduxjs/toolkit";
import { destinationItemApi } from "../../Apis";
import { destinationItemReducer } from "./destinationSlice";
import {  userInfoReducer } from "./userInfoSlice";
import userInfoApi from "../../Apis/userInfoApi";

const store = configureStore({
    reducer: {
        userInfoStore:userInfoReducer,
        [userInfoApi.reducerPath]:userInfoApi.reducer,
        destinationItemStore: destinationItemReducer,
        [destinationItemApi.reducerPath]: destinationItemApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(destinationItemApi.middleware)
        .concat(userInfoApi.middleware)
                           
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

