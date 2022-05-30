import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Button = ({mode}) => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <button className={`btn ${mode?'btn_dark':''}`} onClick={handleBack}>
      <i className="fa-solid fa-arrow-left arrow-left"></i>
      Back
    </button>
  )
}
