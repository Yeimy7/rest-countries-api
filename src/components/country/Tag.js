import { useContext } from 'react'
import { Link } from 'react-router-dom'
import modeContext from '../../context/mode/modeContext'

export const Tag = ({ nameCountry}) => {
  const darkModeContext = useContext(modeContext)
  const { darkMode} = darkModeContext

  return (
    <Link to={ `/country/${nameCountry.toLowerCase()}`}>
      <span className={`btn btn_small ${darkMode?'btn_dark':''}`} >{nameCountry}</span>
    </Link>
  )
}
