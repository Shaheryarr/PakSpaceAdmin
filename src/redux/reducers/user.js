import { USER } from "../actions/types";
import { initialState } from "../initialState";

export const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case USER.SET_USER:
            return action.payload

        default:
            return state;
    }
}