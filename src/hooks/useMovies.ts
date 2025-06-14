import { useQuery } from "@tanstack/react-query"

export const useMovies = ()=> {
    const {data, isPending , isFetching} = useQuery({
        queryKey:['movies'] ,
        queryFn:async ()=>{
            await new Promise((resolve , reject) =>{
                setTimeout(() => {
                    resolve('ok')
                }, 300000);
            })
            const res = await fetch('https://jsonfakery.com/movies/paginated')
            if(!res.json) return
            const data = await res.json()
            return data;
        }  ,
        select:(results) =>{
            return results.data;
        } ,
        refetchOnWindowFocus:false,
        gcTime:36000
    })
    return {data , isPending , isFetching}
}