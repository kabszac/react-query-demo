import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SuperheroesPage = () => {
    const [loading, setLoading] = useState(true)
    const [ data, setData] = useState([])
    const [error, setError] = useState('')
    

    useEffect(()=>{
        axios.get('http://localhost:4000/superheroes').then((res) =>{
            setData(res.data)
            setLoading(false)
        }).catch((err) => {
            setError(err.message)
            setLoading(false)
        })
    })

    if (loading) return <p> Loading ...</p>

    if (error) return <h3> {error}</h3>

    return (
        <>
            <h2>Super Heroes Page</h2>
            {data.map(hero => {
                return <div>{hero.name}</div>
            })}
        </>
    );
};

export default SuperheroesPage