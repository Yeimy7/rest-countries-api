import React from 'react'

export const Card = ({mode}) => {
    return (
        <article className={`card ${mode ? 'dark-mode' : ''}`}>
            <div className='card-grid'>
                <img alt='country-flag' src='https://flagcdn.com/w320/de.png' />
                <div className='card-info'>
                    <h2 className='country-name'>
                        Germany
                    </h2>
                    <span className='country-data'>
                        <strong className='country-data_label'>
                            Population:
                        </strong>
                        81.770.900
                    </span>
                    <span className='country-data'>
                        <strong className='country-data_label'>
                            Region:
                        </strong>
                        Europe
                    </span>
                    <span className='country-data'>
                        <strong className='country-data_label'>
                            Capital:
                        </strong>
                        Berlin
                    </span>
                </div>
            </div>
        </article>
    )
}
