import { useReducer } from "react";
import { DARK_MODE } from "../../types";
import modeContext from "./modeContext";
import { modeReducer } from "./modeReducer";

const ModeState = props => {
    const initialState = {
        darkMode: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(modeReducer, initialState)

    //Funciones

    const changeDarkMode = () => {
        dispatch({
            type:DARK_MODE
        })
    }

    return (
        <modeContext.Provider
            value={{
                darkMode: state.darkMode,
                changeDarkMode
            }}
        >
            {props.children}
        </modeContext.Provider>
    )
}
export default ModeState