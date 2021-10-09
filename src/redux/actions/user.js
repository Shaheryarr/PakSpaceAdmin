import { USER } from "./types";

export const setUser = (user) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: USER.SET_USER,
                payload: user
            });

            resolve();
        })
    }
}