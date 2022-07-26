import { CHANGE_LOADING, GET_COUNTRIES, GET_COUNTRIES_NAME, GET_COUNTRIES_REGION, GET_COUNTRY_NAME } from "../../types";

export const countryReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            }
        case GET_COUNTRIES_NAME:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_COUNTRIES_REGION:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_COUNTRY_NAME:
            return {
                ...state,
                country: action.payload,
                loading: false
            }
        case CHANGE_LOADING:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}