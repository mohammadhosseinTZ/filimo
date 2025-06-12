import { useQuery } from "@tanstack/react-query";

export function useUserFetch(page:number) {
  let info =null


  const {data , isFetched , isPending , isFetching , isPlaceholderData } =useQuery({
    queryKey: ['users' , page ],
    queryFn: async ({queryKey}) => {
      let url = `https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`
      await new Promise((resolve , reject) =>{
        setTimeout(() => {
          resolve('ok')
        }, 5000);
      })

      const res = await fetch(url )
      if (!res.ok) return
      return await res.json()
    },
    select:(results)=>{
      info=results.info
      
      return results.results
    },
    staleTime:400000,
    
  })
  return {data , isFetched , isPending , isFetching , info , isPlaceholderData}
}