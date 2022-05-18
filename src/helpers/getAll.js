export const getAll = async (endpoint) => {
    const { category, param } = endpoint

    const url = category === 0
        ? `https://restcountries.com/v3.1/all`
        : category === 1 ? `https://restcountries.com/v3.1/region/${param}`
            : `https://restcountries.com/v3.1/name/${param}`


    const resp = await fetch(url);
    const data = await resp.json();
    const all = resp.status !== 404 ? data.map(country => {
        return {
            id: country.idd.suffixes + country.ccn3,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
            url: country.flags?.png
        }

    })
        : ''
    return all;
}