import React from 'react'
import { Card } from './Card'

export const CountryGrid = ({ mode, data, loading }) => {
    return (
        <section className="flags">
            <div className="wrapper">
                {loading
                    ? <div className={`lds-dual-ring ${mode ? 'dark-mode-spinner' : ''}`}></div>
                    : <div className="flags-grid">
                        {
                            data !== ''
                                ? data.map((country) =>
                                    <Card
                                        key={country.id}
                                        mode={mode}
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
