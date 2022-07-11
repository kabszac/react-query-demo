import React from 'react';
import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';


const RQSuperHeroPage = () => {
    const {heroId} = useParams()

    const {isLoading, error, isError, data} = useSuperHeroData(heroId)

    if (isLoading) return <p> Loading ...</p>

    if (isError) return <h2> {error.message}</h2>

    console.log(data)

    return (
        <div>
            Super Hero detail
            <div>
                
                    <div> {data?.data.name}</div>
                    <div>{data?.data.alterEgo}</div>
                
            </div>
        </div>
    );
};

export default RQSuperHeroPage;