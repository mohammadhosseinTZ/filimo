import { useQuery } from "@tanstack/react-query";
import { TUsers } from "../pages/Home";

export function useSingleFetch(user: TUsers | null) {
    const { data , isPending , isFetching , refetch} = useQuery({
        queryKey:user ? ['single_user', user?.id] : ['single_user', 'undefuned'] ,
        initialData:user,
     
        queryFn: async ({queryKey}) => {
            
            const url = `https://rickandmortyapi.com/api/character/${queryKey[1]}`
            const res = await fetch(url)

            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('ok')
                }, 5000);
            })
            if (!res.ok) return
            const data = await res.json()
            return data
        },
        enabled: !!user ,
        staleTime:8000,
        gcTime:2000

    })
    return { data , isPending , isFetching ,refetch}
}