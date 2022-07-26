import React, { useContext } from 'react'
import countryContext from '../../context/country/countryContext'
import modeContext from '../../context/mode/modeContext'
import { Card } from './Card'

export const CountryGrid = () => {
    const darkModeContext = useContext(modeContext)
    const { darkMode} = darkModeContext

    const countriesContext = useContext(countryContext)
    const { countries, loading} = countriesContext

    return (
        <section className="flags">
            <div className="wrapper">
                {loading
                    ? <div className={`lds-dual-ring ${darkMode ? 'dark-mode-spinner' : ''}`}></div>
                    : <div className="flags-grid">
                        {
                            countries !== ''
                                ? countries.map((country) =>
                                    <Card
                                        key={country.id}
                                        {...country}
                                    />
                                )
                                : <p className='no-message'>No results</p>
                        }
                    </div>
                }
            </div>

        </section>
    )
}
