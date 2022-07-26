import { useContext, useEffect} from "react";
import countryContext from "../../context/country/countryContext";
import { CountryGrid } from "./CountryGrid";
import { Filter } from "./Filter";
import { Search } from "./Search";


export const MainScreen = () => {

    //Obtener el state de country
    const countriesContext = useContext(countryContext)
    const { getCountries } = countriesContext

    useEffect(() => {
      getCountries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            <section className='controls'>
                <div className='wrapper'>
                    <div className='controls-grid'>
                        <Search />
                        <Filter />
                    </div>
                </div>
            </section>
            <CountryGrid />
        </>
    );
}
