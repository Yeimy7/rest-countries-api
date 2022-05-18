import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ mode, name, population, region, capital, url }) => {
    const handleCard = () => {
        console.log(name)
    }
    return (
        <Link to={`./country/${name.toLowerCase()}`}>
            <article className={`card ${mode ? 'dark-mode' : ''}`} onClick={handleCard}>
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
                            {population}
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
