import axios from 'axios';
import { useQuery, useMutation, useQueryClient} from 'react-query';

const addSuperHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero)
}


export const useSuperHeoresData = (onSuccess, onFail, rfetch) =>{
    return useQuery('super_heroes', () => {
        return axios.get('http://localhost:4000/superheroes')
    }, {onSuccess, 
        onError:onFail, 
        refetchInterval:rfetch,
        
    })
}

export const useAddSuperHeoresData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        onSuccess:(data) => {
            queryClient.setQueryData('super_heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data:[...oldQueryData.data, data.data]
                }
            } )
            //queryClient.invalidateQueries('super_heroes')
        }
    })
}

// export const useSuperHeoresData = () =>{
//     return useQuery('super_heroes', () => {
//         return axios.get('http://localhost:4000/superheroes')
//     }, { 
//         select: (data) => {
//             const super_heroesNames = data.data.map((superHero) => superHero.name)
//             return super_heroesNames
//         }
//     })
// }