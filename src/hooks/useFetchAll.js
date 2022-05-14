import { useEffect, useState } from 'react';
import { getAll } from '../helpers/getAll';

export const useFetchAll = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getAll()
        .then(data=>{
            setState({
                data:data,
                loading:false
            })
        })
    }, []);

    return state;
}
