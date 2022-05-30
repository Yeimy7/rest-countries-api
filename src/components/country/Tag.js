import { Link } from 'react-router-dom'

export const Tag = ({ nameCountry, mode }) => {
  return (
    <Link to={ `/country/${nameCountry.toLowerCase()}`}>
      <span className={`btn btn_small ${mode?'btn_dark':''}`} >{nameCountry}</span>
    </Link>
  )
}
