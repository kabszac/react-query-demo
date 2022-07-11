import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { useSuperHeoresData, useAddSuperHeoresData } from '../hooks/useSuperHeroesData';

const initialValues = {
    name:"",
    alterEgo:""
}


const RQSuperheroesPage= () => {

    const [rfetch, setRfetch] = useState(3000)
    const [values, setValues] =useState(initialValues)
    

    const onSuccess = (data) => {
        if(data.data.length === 4){
            setRfetch(false)
            
        }
    }
    const onFail = (error) => {
        if (error){
            setRfetch(false)
        }
    }

    const {isLoading, isError, error, isFetching, refetch, data} = useSuperHeoresData(onSuccess,onFail, rfetch)
    const {mutate} = useAddSuperHeoresData()

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    

    console.log({isLoading, isFetching})

    if (isLoading) return <p> Loading ...</p>

    if (isError) return <h2> {error.message}</h2>

    const handleHeroClick = () => {
        const {name, alterEgo} = values
        console.log(name, alterEgo)
        const hero = {name, alterEgo}
        console.log(hero)
        mutate(hero)
    }

    return (
        <>
            <h2> RQ Super heroes</h2>
            <div>
                <input value={values.name}
                  placeholder= 'name' 
                  type='text' 
                  name='name' 
                  onChange={handleOnChange}/>

                <input value={values.alterEgo}
                  placeholder= 'alterEgo' 
                  type='text' 
                  name='alterEgo' 
                  onChange={handleOnChange}/>

                <button onClick={handleHeroClick}> Add Hero</button>

            </div>
            <button onClick={refetch}> Fire me</button>
            {
                data && data.data.map((hero) => {
                    return(
                        <div key={hero.id}>
                            <Link to={`/rq-super-heroes/${hero.id}`}> {hero.name}</Link>
                        </div>
                    )
                })
            }
            {/* {
                data.map((hero) => <div key={hero}> { hero}</div>)
            } */}
        </>
    );
};

export default RQSuperheroesPage;