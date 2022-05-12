import React, { useState } from 'react'

export const Filter = ({mode}) => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div className={`dropdown ${mode ? 'dark-mode' : ''}`}>
            <div className='dropdown-select'>
                <span className='select'>Filter by Region</span>
                <i className='fa-solid fa-angle-down' onClick={handleClick}></i>
            </div>
            <div className={`dropdown-list ${click?'click':''}`}>
                <div className='dropdown-list__item'>Africa</div>
                <div className='dropdown-list__item'>America</div>
                <div className='dropdown-list__item'>Asia</div>
                <div className='dropdown-list__item'>Europe</div>
                <div className='dropdown-list__item'>Oceania</div>
            </div>
        </div>


    )
}
