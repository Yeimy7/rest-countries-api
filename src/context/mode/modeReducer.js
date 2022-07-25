import { DARK_MODE } from "../../types";

export const modeReducer = (state = {}, action) => {
    switch (action.type) {
        case DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
}