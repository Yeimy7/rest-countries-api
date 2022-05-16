import { useEffect, useState } from 'react';
import { getAll } from '../helpers/getAll';

export const useFetchAll = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getAll(category)
        .then(data=>{
            setState({
                data:data,
                loading:false
            })
        })
    }, [category]);

    return state;
}
