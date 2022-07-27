import { useReducer } from "react";
import { CHANGE_LOADING, GET_COUNTRIES, GET_COUNTRIES_ERROR, GET_COUNTRIES_NAME, GET_COUNTRIES_REGION, GET_COUNTRY_NAME } from "../../types";
import countryContext from "./countryContext";
import { countryReducer } from "./countryReducer";

const CountryState = props => {
    const initialState = {
        loading: true,
        countries: [],
        country:null

    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(countryReducer, initialState)

    //Funciones

    const getCountries = async () => {

        try {
            const resp = await fetch('https://restcountries.com/v3.1/all');
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
            }) : ''

            dispatch({
                type: GET_COUNTRIES,
                payload: all
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: GET_COUNTRIES_ERROR,
                payload: alerta
            })
        }
    }
    const getCountriesName = async (name) => {
        try {
            const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`);
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
            }) : ''

            dispatch({
                type: GET_COUNTRIES_NAME,
                payload: all
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: GET_COUNTRIES_ERROR,
                payload: alerta
            })
        }
    }

    

    const getCountriesRegion = async (region) => {
        try {
            const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`);
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
            }) : ''

            dispatch({
                type: GET_COUNTRIES_REGION,
                payload: all
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: GET_COUNTRIES_ERROR,
                payload: alerta
            })
        }
    }

    const getCountryName = async (name) => {
        try {
            const resp = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
            const data = await resp.json();  
            const country = resp.status !== 404 ?
                 {
                    id: data[0].idd.suffixes + data[0].ccn3,
                    name: data[0].name.common,
                    population: data[0].population,
                    region: data[0].region,
                    capital: data[0].capital,
                    url: data[0].flags?.png,

                    nativeName: data[0].name.official,
                    subRegion: data[0].subregion,
                    borderCountries: data[0].borders,
                    topLevelDomain: data[0].tld,
                    currencies: data[0].currencies,
                    languages: data[0].languages,
                    flag: data[0].flags?.svg,
                }
             : ''

            dispatch({
                type: GET_COUNTRY_NAME,
                payload: country
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: GET_COUNTRIES_ERROR,
                payload: alerta
            })
        }
    }
    const changeLoading=()=>{
        dispatch({
            type: CHANGE_LOADING,
        })
    }

    return (
        <countryContext.Provider
            value={{
                loading: state.loading,
                countries: state.countries,
                country:state.country,
                getCountries,
                getCountriesName,
                getCountriesRegion, 
                getCountryName,
                changeLoading
            }}
        >
            {props.children}
        </countryContext.Provider>
    )
}
export default CountryState