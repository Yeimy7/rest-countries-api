import { formatNumber } from '../../helpers/formatNumber';
import { getValuesOfObject } from '../../helpers/getValuesOfObject';
import { useGetCountryByName } from '../../hooks/useGetCountryByName';
import { Tag } from './Tag'

export const CountryDetails = ({ data }) => {

    const { name, nativeName, population, region, subRegion, capital, borderCountries, topLevelDomain, currencies, languages } = data
    
    let curre
    try {
        let currencie = getValuesOfObject(currencies)
        curre = currencie.map(e => {
            let { name } = e
            return name
        })
    } catch (error) {
        curre=['No currencies']
    }


    const { data: countries } = useGetCountryByName(borderCountries?.join(','))

    const langua = getValuesOfObject(languages)


    return (
        <article className='details'>
            <h1 className='details-title'>{name}</h1>
            <div className='details-wrapper'>
                <div>
                    <span className='detail'><strong className='detail-label'>Native Name:</strong> {nativeName}</span>
                    <span className='detail'><strong className='detail-label'>Population:</strong> {formatNumber(population)}</span>
                    <span className='detail'><strong className='detail-label'>Region:</strong> {region}</span>
                    <span className='detail'><strong className='detail-label'>Sub Region:</strong> {subRegion}</span>
                    <span className='detail'><strong className='detail-label'>Capital:</strong> {capital}</span>
                </div>
                <div>
                    <span className='detail'><strong className='detail-label'>Top Level Domain:</strong> {topLevelDomain}</span>
                    <span className='detail'><strong className='detail-label'>Currencies:</strong> {curre.join(', ')}</span>
                    <span className='detail'><strong className='detail-label'>Languages:</strong> {langua.join(', ')}</span>
                </div>
            </div>
            {
                countries !== null
                    ? <div className='border-countries-wrapper'>
                        <span className='detail detail_countries'><strong className='detail-label'>Border Countries:</strong></span>
                        {
                            countries.map((country, index) => <Tag key={index} nameCountry={country} />)
                        }
                    </div>
                    : ''
            }

        </article>
    )
}
