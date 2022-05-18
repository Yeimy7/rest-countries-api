import { useEffect, useState } from 'react';
import { getAll } from '../helpers/getAll';

export const useFetchAll = (endpoint) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getAll(endpoint)
        .then(data=>{
            setState({
                data:data,
                loading:false
            })
        })
    }, [endpoint]);

    return state;
}
