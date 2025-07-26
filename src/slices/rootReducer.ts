import {combineReducers} from "redux";
import eventReducer from "./eventSlice";
import cartReducer from "./cartSlice";
import concertReducer from "./concertSlice";

export const rootReducer = combineReducers({
    events:eventReducer,
    cart:cartReducer,
    concerts:concertReducer
});
export type RootReducerState = ReturnType<typeof rootReducer>