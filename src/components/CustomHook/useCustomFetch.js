import React, { useState, useEffect } from 'react'

const useCustomFetch = (url) => {

    const [data, setDatas] = useState(null);
    const [isLoding, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //useEffect er belay anonious fun use korbo .then diye res ke json formet
    // a return korbo then value set korbo
    // data fatch er somoy useState use korbo
    // jehetu amar url theke onek data asbe tai ekhane mapping korte hobe
    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw error("fetching Error");
                } else {
                    return res.json();
                }

            })
            .then((data) => {
                setDatas(data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [url])

    return { data, isLoding, error }
}

export default useCustomFetch