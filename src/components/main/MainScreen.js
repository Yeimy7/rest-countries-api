import { useState } from "react";
import { useFetchAll } from "../../hooks/useFetchAll";
import { CountryGrid } from "./CountryGrid";
import { Filter } from "./Filter";
import { Search } from "./Search";


export const MainScreen = () => {


    const [endpoint, setEndpoint] = useState({
        category: 0,
        param: ''
    })
    const { data, loading } = useFetchAll(endpoint);

    return (
        <>
            <section className='controls'>
                <div className='wrapper'>
                    <div className='controls-grid'>
                        <Search setCategory={setEndpoint} />
                        <Filter setCategory={setEndpoint} />
                    </div>
                </div>
            </section>
            <CountryGrid data={data} loading={loading} />
        </>
    );
}
