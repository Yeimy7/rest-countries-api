import React, { useState } from 'react'

export const Filter = ({ mode }) => {
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
    const handleContinent=(e)=>{
        console.log(e.target.innerHTML)
        setContinent(e.target.innerHTML)
        setClick(!click)
    }
    return (
        <div className={`dropdown ${mode ? 'dark-mode' : ''}`}>
            <div className='dropdown-select'>
                <span className='select'>{continent}</span>
                <i className='fa-solid fa-angle-down' onClick={handleDropdown}></i>
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
