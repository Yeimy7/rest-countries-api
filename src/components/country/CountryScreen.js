import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import modeContext from '../../context/mode/modeContext'
import { getAll } from '../../helpers/getAll'
import { Button } from './Button'
import { CountryDetails } from './CountryDetails'


export const CountryScreen = () => {
  const darkModeContext = useContext(modeContext)
  const { darkMode} = darkModeContext

  const { countryId } = useParams()
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  useEffect(() => {
    getAll({
      category: 3,
      param: countryId
    })
      .then(data => {
        setState({
          data: data[0],
          loading: false
        })
      })
  }, [countryId]);

  return (
    <section>
      <div className='wrapper'>
        <div className='button-wrapp'>
          <Button/>
        </div>
        <div className='details-wrapp'>
          <div className='image-wrapp'>
            <img className='country-flag_big' alt='country-flag' src={state.data.flag} />
          </div>
          {state.loading
            ? <div className={`lds-dual-ring ${darkMode ? 'dark-mode-spinner' : ''}`}></div>
            : <CountryDetails className='data-wrapp' data={state.data} />
          }
        </div>

      </div>
    </section>
  )
}
