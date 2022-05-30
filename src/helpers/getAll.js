export const getAll = async (endpoint) => {
    const { category, param } = endpoint

    let url;
    switch (category) {
        case 1:
            url = `https://restcountries.com/v3.1/region/${param}`
            break;
        case 2:
            url = `https://restcountries.com/v3.1/name/${param}`
            break;
        case 3:
            url = `https://restcountries.com/v3.1/name/${param}?fullText=true`
            break;
        default:
            url = 'https://restcountries.com/v3.1/all'
            break;
    }

    const resp = await fetch(url);
    const data = await resp.json();
    const all = resp.status !== 404 ? data.map(country => {
        return {
            id: country.idd.suffixes + country.ccn3,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
            url: country.flags?.png,

            nativeName: country.name.official,
            subRegion: country.subregion,
            borderCountries: country.borders,
            topLevelDomain: country.tld,
            currencies: country.currencies,
            languages: country.languages,
            flag: country.flags?.svg,

        }

    })
        : ''
    return all;
}