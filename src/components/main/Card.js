import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import modeContext from '../../context/mode/modeContext'
import { formatNumber } from '../../helpers/formatNumber'

export const Card = ({  name, population, region, capital, url }) => {
    const darkModeContext = useContext(modeContext)
    const { darkMode} = darkModeContext
    
    return (
        <Link to={`./country/${name.toLowerCase()}`}>
            <article className={`card ${darkMode ? 'dark-mode' : ''}`}>
                <div className='card-grid'>
                    <img alt='country-flag' src={url} className='country-flag' />
                    <div className='card-info'>
                        <h2 className='country-name'>
                            {name}
                        </h2>
                        <span className='country-data'>
                            <strong className='country-data_label'>
                                Population:
                            </strong>
                            {formatNumber(population)}
                        </span>
                        <span className='country-data'>
                            <strong className='country-data_label'>
                                Region:
                            </strong>
                            {region}
                        </span>
                        <span className='country-data'>
                            <strong className='country-data_label'>
                                Capital:
                            </strong>
                            {capital}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    )
}
