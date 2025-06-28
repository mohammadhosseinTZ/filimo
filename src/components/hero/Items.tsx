import styles from "./styles.module.css"
import { TMovies } from "./Hero"
import { Link, Navigate, useNavigate } from "react-router"
import { useState } from "react"
import Items_Sketon from "./skelton/Items_Sketon"

export default function Items({ movies, isFetching, isPending }: { movies: TMovies[], isFetching: boolean, isPending: boolean }) {
    const navigate = useNavigate()
    const [more, setMore] = useState<number>(10)
    const handleClicked =((el:TMovies)=>{
        localStorage.setItem("item" , JSON.stringify(el))
        navigate(`/w/${el.original_title}`)
    })

    return (
        <>
            {isFetching || isPending ?
                <Items_Sketon />
                :
                <div className={styles.items_wrapper}>
                    <div className={styles.title}>
                        <h5>ویژه</h5>
                        <div>
                            <Link to={'/'}>مشاهده همه</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41 1 1 0 0 1-.73.32"></path></svg>
                        </div>
                    </div>
                    <div className={styles.items}>
                        {movies.slice(0, more).map(el => (
                            <button onClick={()=>handleClicked(el)} className={styles.item} key={el.id}>
                                <div className={styles.img_wrapper}>
                                    <img src={el.poster_path} alt="" />
                                    <div className={styles.details}>
                                        <h5>{el.original_title}</h5>
                                        <div className={styles.info}>
                                            <span className={styles.imdb}><span>IMDB</span> {el.vote_average} </span>
                                            <span>{new Date(el.release_date).getFullYear()}</span>
                                        </div>
                                        <p className={styles.overview}>{el.overview}</p>
                                    </div>
                                </div>
                            </button>
                        ))
                        }
                    </div>
                    {
                        more > 10 ? '' :
                            <div className={styles.see_more}>
                                <button onClick={() => setMore(movies.length)} > مشاهده بیشتر <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17a1 1 0 0 1-.77-.36l-5-6A1 1 0 0 1 7 9h10a1 1 0 0 1 .77 1.64l-5 6A1 1 0 0 1 12 17"></path></svg>
                                </button>
                            </div>
                    }
                </div>}
        </>
    )
}
