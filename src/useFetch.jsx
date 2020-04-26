import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    // console.log('useFetch only');

    useEffect(() => {
        // console.log('coming from useFetchEffect');
        async function fetchData() {
            setLoading(true);
            setError();

            const data = await fetch(url)
                .then(res => res.json())
                .catch(err => setError(err));
            
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return {
        data,
        loading,
        error,
    };
}