import { useContext } from 'react';
import modeContext from '../../context/mode/modeContext';
import { useForm } from '../../hooks/useForm';

export const Search = ({ setCategory}) => {

    const darkModeContext = useContext(modeContext)
    const { darkMode } = darkModeContext

    const [formValues, handleInputChange, reset] = useForm({
        searchText: ''
    }, setCategory);
    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault()
        // setCategory({category:2, param:searchText})
        reset()
    }
    return (
        <form onSubmit={handleSearch} className={`input-wrapper ${darkMode ? 'dark-mode' : ''}`}>
            <input
                type='search'
                className='input'
                placeholder='Search for a country...'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 512 512">
                <title>Search</title>
                <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path>
            </svg>
        </form>
    )
}
