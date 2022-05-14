import React from 'react'
import { useFetchAll } from '../hooks/useFetchAll';
import { Card } from './Card'

export const CountryGrid = ({ mode }) => {
    const { data, loading } = useFetchAll();
    return (
        <section className="flags">
            <div className="wrapper">
                {loading
                    ? <div className={`lds-dual-ring ${mode ? 'dark-mode-spinner' : ''}`}></div>
                    : <div className="flags-grid">
                        {
                            data.map((country) =>
                                <Card
                                    key={country.id}
                                    mode={mode}
                                    {...country}
                                />
                            )
                        }
                    </div>
                }
            </div>

        </section>
    )
}
