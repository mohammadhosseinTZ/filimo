import { useInfiniteQuery } from "@tanstack/react-query"
import { InfiniteContext } from "../context/InfiniteProvider"
import { useContext } from "react"

export const useMoviesInfinite  =()=>{
    const context = useContext(InfiniteContext)
    let total = 0
    let to = 0
    const {data , isPending , isFetchingNextPage , fetchNextPage , hasNextPage} = useInfiniteQuery({
        queryKey:['movies_infinite'] ,
        initialPageParam : 1 ,
        queryFn: async ({pageParam})=>{
            const res = await fetch(`https://jsonfakery.com/movies/paginated?page=${pageParam}`)
            if(!res.ok)return
            const data =await res.json()
            context.dispatch({type:"ADD" , payload:data['data']})
            return data
        } ,
        getNextPageParam:(lastPage , allPages , lastPageParam , allPageParams)=>{
            if(lastPage["current_page"] <= lastPage["last_page"]){
                return lastPageParam + 1
            }else return null
        } ,
        select:(results) =>{
            total = results.pages[results.pages.length-1].total
            to = results.pages[results.pages.length-1].to
            return results.pages.flatMap(el => el.data)
        },
        refetchOnWindowFocus:false,
        gcTime:36000
    })
    return ({data , isPending , isFetchingNextPage , to , total , fetchNextPage , hasNextPage})
}