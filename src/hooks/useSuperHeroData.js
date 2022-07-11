import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
    const queryClient = useQueryClient()
    return useQuery(['super_hero', heroId], () => fetchSuperHero(heroId), {
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id ===Number(heroId))
            if (hero) {
                return{
                    data:hero
                }
            }else{
                return undefined
            }
        }
    })
}