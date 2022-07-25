
export const countryReducer = (state = {}, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
}