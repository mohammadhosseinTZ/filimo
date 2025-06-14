import { useQueryClient } from "@tanstack/react-query";
import { useMovies } from "../../hooks/useMovies"
import SwiperBg from "./SwiperBg";
import Filter from "../filter/Filter";
import AllMovies from "../allMovies/AllMovies";
export interface TMovies {
  id: string
  original_title: string
  original_language: string
  overview: string
  popularity: Number
  poster_path: string
  vote_average: number
  release_date:string
}
export interface TCasts {
  id: string
  name: string
  popularity: string
  profile_path: string
  character: string
}
function Hero() {
  const { data, isPending, isFetching } = useMovies()
  

  return (
    <div>
      <SwiperBg movies={data} isPending={isPending} isFetching={isFetching} />
      <Filter/>
      <AllMovies/>
    </div>
  )
}

export default Hero