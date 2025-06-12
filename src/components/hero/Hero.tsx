import { useMovies } from "../../hooks/useMovies"
import SwiperBg from "./SwiperBg";
export interface TMovies {
  id: string
  original_title: string
  original_language: string
  overview: string
  popularity: Number
  poster_path: string
  vote_average: number
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
      <SwiperBg movies={data}/>
    </div>
  )
}

export default Hero