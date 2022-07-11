import React from 'react';
import { useSuperHeoresData } from '../hooks/useSuperHeroesData';


const RQsuperheroesPageExercise = () => {
    const {error,isError,isLoading, isFetching, loading, refetch, data} = useSuperHeoresData()
    if (loading) return <h2> Loading ...</h2>
    if (isError) return <h2>{error.message}</h2>
    console.log({isLoading, isFetching})
    return (
        <div>
            <button onClick={refetch}> Fetch</button>
            <div>
                {
                    data.map((name) => <div key={name}>{name}</div>)
                }
            </div>
        </div>
    );
};

export default RQsuperheroesPageExercise;