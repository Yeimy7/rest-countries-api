import React from 'react'
import { Tag } from './Tag'

export const CountryDetails = () => {
    return (
        <article className='details'>
            <h1 className='details-title'>Belgium</h1>
            <div className='details-wrapper'>
                <div>
                    <span className='detail'><strong className='detail-label'>Native Name:</strong> Belgie</span>
                    <span className='detail'><strong className='detail-label'>Population:</strong> 11.319.511</span>
                    <span className='detail'><strong className='detail-label'>Region:</strong> Europe</span>
                    <span className='detail'><strong className='detail-label'>Sub Region:</strong> Western Europe</span>
                    <span className='detail'><strong className='detail-label'>Capital:</strong> Brussels</span>
                </div>
                <div>
                    <span className='detail'><strong className='detail-label'>Top Level Domain:</strong> .be</span>
                    <span className='detail'><strong className='detail-label'>Currencies:</strong> Euro</span>
                    <span className='detail'><strong className='detail-label'>Languages:</strong> Dutch, Frenck, German</span>
                </div>
            </div>
            <div className='border-countries-wrapper'>
                <span className='detail detail_countries'><strong className='detail-label'>Border Countries:</strong></span>
                <Tag/>
                <Tag/>
                <Tag/>
            </div>
        </article>
    )
}
