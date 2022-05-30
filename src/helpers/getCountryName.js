export const getCountryName = async (code) => {

    const url =`https://restcountries.com/v3.1/alpha?codes=${code}`
    const resp = await fetch(url);
    const data = await resp.json();
    const countryName = resp.status !== 404 ? data
        : ''
    return countryName;
}