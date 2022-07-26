import { useContext, useState } from "react"
import countryContext from "../context/country/countryContext";

export const useForm = (initialState = {}) => {
    const countriesContext = useContext(countryContext)
    const { getCountries, getCountriesName } = countriesContext

    const [values, setValues] = useState(initialState)
    const reset = () => {
        setValues(initialState)
    }
    const handleInputChange = ({ target }) => {
        target.value !== ''
            ? getCountriesName(target.value)
            : getCountries()

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];
}