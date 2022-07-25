import { useReducer } from "react";
import countryContext from "./countryContext";
import { countryReducer } from "./countryReducer";

const CountryState = props => {
    const initialState = {
        countries: []
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(countryReducer, initialState)

    //Funciones

    const changeDarkMode = () => {
        dispatch({
            type:''
        })
    }

    return (
        <countryContext.Provider
            value={{
                countries: state.countries,
            }}
        >
            {props.children}
        </countryContext.Provider>
    )
}
export default CountryState