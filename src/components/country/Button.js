import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import modeContext from '../../context/mode/modeContext'

export const Button = () => {

  const darkModeContext = useContext(modeContext)
  const { darkMode} = darkModeContext

  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <button className={`btn ${darkMode?'btn_dark':''}`} onClick={handleBack}>
      <i className="fa-solid fa-arrow-left arrow-left"></i>
      Back
    </button>
  )
}
