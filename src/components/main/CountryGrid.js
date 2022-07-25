import React, { useContext } from 'react'
import modeContext from '../../context/mode/modeContext'
import { Card } from './Card'

export const CountryGrid = ({  data, loading }) => {
    const darkModeContext = useContext(modeContext)
    const { darkMode} = darkModeContext

    return (
        <section className="flags">
            <div className="wrapper">
                {loading
                    ? <div className={`lds-dual-ring ${darkMode ? 'dark-mode-spinner' : ''}`}></div>
                    : <div className="flags-grid">
                        {
                            data !== ''
                                ? data.map((country) =>
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
