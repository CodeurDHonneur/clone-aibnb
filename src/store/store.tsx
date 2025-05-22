import { configureStore } from "@reduxjs/toolkit";
import CardListReducer from "../slice/CardListReducer";

export const store = configureStore({
    reducer: {
        cardList: CardListReducer
    }

});


export type typeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;