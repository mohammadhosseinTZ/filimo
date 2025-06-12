import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export function useUserInfinite() {

    const { data, isPending, isFetchingNextPage , hasNextPage  , fetchNextPage} = useInfiniteQuery({
        queryKey: ['users_infiite'],
        initialPageParam:1,
        queryFn: async ({ pageParam }) => {
            const url = `https://rickandmortyapi.com/api/character/?page=${pageParam}`

            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('ok')
                }, 5000);
            })

            const res = await fetch(url)
            if (!res.ok) return
            return await res.json()
        },
        getNextPageParam: (lastPage , allPages , lastPageParam , allPageParams) => {
            if(lastPage.info.next){
                return lastPageParam + 1
            }else return null
        },
        select: (results) => {
            return results.pages.flatMap(el => el.results)
        },
        staleTime: 400000,
    })
    return { data, isPending, isFetchingNextPage , hasNextPage , fetchNextPage }
}


