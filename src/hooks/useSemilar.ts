import { useQuery } from "@tanstack/react-query"

export const useSimilar = (num : number)=>{
    const {data, isFetching} = useQuery({
        queryKey:['similar' , num],
        queryFn:async ({queryKey})=>{
            const url = `https://jsonfakery.com/movies/random/${queryKey[1]}`
            const res = await fetch(url)
            if(!res.ok)return
            const data =await res.json()
            return data
        },
        refetchOnWindowFocus:false,
        gcTime:2000
    })
    return {data ,isFetching}
} 