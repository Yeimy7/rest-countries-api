import { useContext } from 'react';
import countryContext from '../../context/country/countryContext';
import { formatNumber } from '../../helpers/formatNumber';
import { getValuesOfObject } from '../../helpers/getValuesOfObject';
import { useGetCountryByName } from '../../hooks/useGetCountryByName';
import { Tag } from './Tag'

export const CountryDetails = () => {

    const countriesContext = useContext(countryContext)
    const { country } = countriesContext

    const getCurrencies = (data) => {
        try {
            let currencie = getValuesOfObject(data)
            return currencie.map(e => {
                let { name } = e
                return name
            })
        } catch (error) {
            return ['No currencies']
        }
    }

    const { data } = useGetCountryByName(country.borderCountries?.join(','))

    const getLanguages = (languages) => {
        return getValuesOfObject(languages)
    }



    return (
        <article className='details'>
            {country && (
                <>
                    <h1 className='details-title'>{country.name}</h1>
                    <div className='details-wrapper'>
                        <div>
                            <span className='detail'><strong className='detail-label'>Native Name:</strong> {country.nativeName}</span>
                            <span className='detail'><strong className='detail-label'>Population:</strong> {formatNumber(country.population)}</span>
                            <span className='detail'><strong className='detail-label'>Region:</strong> {country.region}</span>
                            <span className='detail'><strong className='detail-label'>Sub Region:</strong> {country.subRegion}</span>
                            <span className='detail'><strong className='detail-label'>Capital:</strong> {country.capital}</span>
                        </div>
                        <div>
                            <span className='detail'><strong className='detail-label'>Top Level Domain:</strong> {country.topLevelDomain}</span>
                            <span className='detail'><strong className='detail-label'>Currencies:</strong> {getCurrencies(country.currencies).join(', ')}</span>
                            <span className='detail'><strong className='detail-label'>Languages:</strong> {getLanguages(country.languages).join(', ')}</span>
                        </div>
                    </div>
                    {
                        data !== null
                            ? <div className='border-countries-wrapper'>
                                <span className='detail detail_countries'><strong className='detail-label'>Border Countries:</strong></span>
                                {
                                    data.map((country, index) => <Tag key={index} nameCountry={country} />)
                                }
                            </div>
                            : ''
                    }
                </>
            )}



        </article>
    )
}
