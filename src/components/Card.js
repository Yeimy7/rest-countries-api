import React from 'react'

export const Card = () => {
    return (
        <article className='card'>
            <div className='card-grid'>
                <img alt='country-flag' src='https://flagcdn.com/w320/de.png' />
                <div className='card-info'>
                    <h2 className='country-name'>
                        Germany
                    </h2>
                    <p>
                        <span className='country-characteristics'>
                            Population:
                        </span>
                         81.770.900
                    </p>
                    <p>
                        <span className='country-characteristics'>
                            Region:
                        </span>
                         Europe
                    </p>
                    <p>
                        <span className='country-characteristics'>
                            Capital:
                        </span>
                         Berlin
                    </p>
                </div>
            </div>
        </article>
    )
}
