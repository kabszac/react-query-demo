import axios from 'axios';
import React, {useState} from 'react';
import { useQuery } from 'react-query';

const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, isError, error, data} =useQuery(['colors', pageNumber], () => fetchColors(pageNumber), {
        keepPreviousData:true
    })

    if (isLoading) return <h2> Loading ... </h2>
    if (isError) return <h2> {error.message}</h2>
    return (
        <div>
            <div>
                {
                    data?.data.map((color) => {
                        return <div key={color.id}> {color.id}.{color.label}</div>
                    })
                }
            </div>
            <button onClick={() => setPageNumber(prevpage => prevpage -1)} disabled={pageNumber===1}>Prev Page</button>
            <button onClick={() => setPageNumber(prevpage => prevpage + 1)} disabled={pageNumber===4}>Next Page</button>
        </div>
    );
};

export default PaginatedQueriesPage;