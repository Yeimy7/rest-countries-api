import React from 'react'

export const Header = () => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='header-grid'>
                    <h1 className='header-title'>
                        Where in the world?
                    </h1>
                    <div className='header-mode'>
                        <i className="fa-solid fa-moon"></i>
                        <span> Dark Mode</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
