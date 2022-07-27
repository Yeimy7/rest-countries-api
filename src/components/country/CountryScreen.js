import React, { useContext, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import countryContext from '../../context/country/countryContext'
import modeContext from '../../context/mode/modeContext'
import { Button } from './Button'
import { CountryDetails } from './CountryDetails'


export const CountryScreen = () => {
  const darkModeContext = useContext(modeContext)
  const { darkMode } = darkModeContext

  const countriesContext = useContext(countryContext)
  const { country, loading, getCountryName, changeLoading } = countriesContext

  const { countryId } = useParams()

  useLayoutEffect(() => {
    getCountryName(countryId)
    return () => {
      changeLoading()
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryId])



  return (
    <section>
      <div className='wrapper'>
        <div className='button-wrapp'>
          <Button />
        </div>
        <div className='details-wrapp'>
          <div className='image-wrapp'>
            <img className='country-flag_big' alt='country-flag' src={country?.flag} />
          </div>
          {loading
            ? <div className={`lds-dual-ring ${darkMode ? 'dark-mode-spinner' : ''}`}></div>
            : <CountryDetails className='data-wrapp' country={country} />
          }
        </div>

      </div>
    </section>
  )
}
