import { TAppState, initialAppState, appReducer } from "~/state/app/app-state";
import { combineReducers } from "redux";

export type TGlobalState = {
    app: TAppState;
}

export const initialGlobalState: TGlobalState = {
    app: initialAppState
};

export const rootReducer = combineReducers({
    app: appReducer
});