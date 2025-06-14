import styles from "./styles.module.css"
import { TMovies } from "./Hero"
import { Link } from "react-router"
import { useState } from "react"

export default function Items({ movies, isFetching, isPending }: { movies: TMovies[], isFetching: boolean, isPending: boolean }) {
    const [more, setMore] = useState<number>(10)



    console.log(movies);

    return (
        <>
            {isFetching || isPending ?
                <div className={`skeleton-wrapper ${styles.skelton_items}`}>
                    <div className="skeleton-image"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text short"></div>
                </div>
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
                        {isFetching || isPending
                            ? <div>load</div>
                            : movies.slice(0, more).map(el => (
                                <div className={styles.item} key={el.id}>
                                    <div className={styles.img_wrapper}><img src={el.poster_path} alt="" /></div>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => setMore(movies.length)}> مشاهده بیشتر</button>
                </div>}
        </>
    )
}
