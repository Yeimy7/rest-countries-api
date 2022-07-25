import React, { useContext } from 'react'
import modeContext from '../../context/mode/modeContext'

export const Header = () => {

    //Obtener el state del modeDark
    const darkModeContext = useContext(modeContext)
    const { darkMode, changeDarkMode } = darkModeContext
    
    const handleMode = () => {
        changeDarkMode()
    }
    return (
        <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
            <div className='wrapper'>
                <div className='header-grid'>
                    <h1 className='header-title'>
                        Where in the world?
                    </h1>
                    <div className='header-mode' onClick={handleMode}>
                        <i className={`fa-${darkMode ? 'solid' : 'regular'} fa-moon header-icon `}></i>
                        <span> Dark Mode</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
