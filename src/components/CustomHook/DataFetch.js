import React, { useState, useEffect } from 'react'
import useCustomFetch from './useCustomFetch'


const DataFetch = () => {
    // custom fetch a url ta sent kortechi useCustomFetch fun use kore
    const { data, isLoding, error } = useCustomFetch("https://jsonplaceholder.typicode.com/todos");

    const loadingMassege = "Fetch Loadding";
    const errorMassege = { error };

    const dataItem = data && data.map((data) => {
        return <p key={data.id}>{data.title}</p>
    })
    return (
        <div>
            <h2>Todus Title</h2>
            {isLoding && loadingMassege}
            {error && errorMassege}
            {dataItem}
        </div>
    )
}

export default DataFetch