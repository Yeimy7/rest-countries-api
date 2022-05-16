export const getAll = async (category) => {

    console.log(category)
    // const url = `https://restcountries.com/v3.1/${category}`
    const url = category === ''
        ? `https://restcountries.com/v3.1/all`
        : `https://restcountries.com/v3.1/region/${category}`
const resp = await fetch(url);
const data = await resp.json();
const all = data.map(country => {
    return {
        id: country.idd.suffixes + country.ccn3,
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital,
        url: country.flags?.png
    }
})
return all;
}