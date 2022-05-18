import React from 'react'

export const Header = ({ mode, setMode }) => {
    const handleMode = () => {
        setMode(!mode)
    }
    return (
        <header className={`header ${mode ? 'dark-mode' : ''}`}>
            <div className='wrapper'>
                <div className='header-grid'>
                    <h1 className='header-title'>
                        Where in the world?
                    </h1>
                    <div className='header-mode' onClick={handleMode}>
                        <i className={`fa-${mode ? 'solid' : 'regular'} fa-moon header-icon `}></i>
                        <span> Dark Mode</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
