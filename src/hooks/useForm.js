import { useState } from "react"

export const useForm = (initialState = {}, setCategory) => {
    const [values, setValues] = useState(initialState)
    const reset = () => {
        setValues(initialState)
    }
    const handleInputChange = ({ target }) => {
        setCategory(target.value !== ''
            ? { category: 2, param: target.value }
            : { category: 0, param: 'all' }
        )
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];
}