import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default function Listado() {
    const history = useHistory();
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            history.push('/');
        }
    }, [])
    


    return (
        <>
            <h2>Listado</h2>
        </>
    )
}
