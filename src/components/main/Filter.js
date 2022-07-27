import React, { useContext, useState } from 'react'
import countryContext from '../../context/country/countryContext'
import modeContext from '../../context/mode/modeContext'

export const Filter = () => {
    const darkModeContext = useContext(modeContext)
    const { darkMode} = darkModeContext

    const countriesContext = useContext(countryContext)
    const { getCountriesRegion} = countriesContext

    const continents = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania'
    ]
    const [click, setClick] = useState(false)
    const [continent, setContinent] = useState('Filter by Region')

    const handleDropdown = () => {
        setClick(!click)
    }
    const handleContinent = (e) => {
        setContinent(e.target.innerHTML)
        setClick(!click)
        getCountriesRegion(e.target.innerHTML)
    }
    return (
        <div className={`dropdown ${darkMode ? 'dark-mode' : ''}`}>
            <div className='dropdown-select' onClick={handleDropdown}>
                <span className='select'>{continent}</span>
                <i className='fa-solid fa-angle-down' ></i>
            </div>
            <div className={`dropdown-list ${click ? 'click' : ''}`}>
                {
                    continents.map((land, index) =>
                        <div className='dropdown-list__item'
                            onClick={handleContinent}
                            key={index}
                        >
                            {land}
                        </div>
                    )
                }
            </div>
        </div>


    )
}
