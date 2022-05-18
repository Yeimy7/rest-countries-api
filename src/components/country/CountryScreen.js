import React from 'react'
import { Button } from './Button'
import { CountryDetails } from './CountryDetails'

export const CountryScreen = () => {
  return (
    <section>
      <div className='wrapper'>
        <div className='button-wrapp'>
          <Button />
        </div>
        <div className='details-wrapp'>
          <div className='image-wrapp'>
            <img className='country-flag_big' alt='country-flag' src='https://flagcdn.com/be.svg' />
          </div>
          <CountryDetails className='data-wrapp' />
        </div>

      </div>
    </section>
  )
}
