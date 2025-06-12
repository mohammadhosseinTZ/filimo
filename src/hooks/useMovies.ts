import { useQuery } from "@tanstack/react-query"

export const useMovies = ()=> {
    const {data, isPending , isFetching} = useQuery({
        queryKey:['movies'] ,
        queryFn:async ()=>{
            const res = await fetch('https://jsonfakery.com/movies/paginated')
            if(!res.json) return
            const data = await res.json()
            return data;
        }  ,
        select:(results) =>{
            return results.data;
        } ,
        refetchOnWindowFocus:false
    })
    return {data , isPending , isFetching}
}