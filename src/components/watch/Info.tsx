import styles from "./styles.module.css"
import { TMovies } from '../hero/Hero'

function Info({ data }: { data?: TMovies | null }) {
    return (
        <>
            {data && <div className={styles.info}>
                <div className={styles.details}>
                    <span className={styles.date}>
                        {new Date(data?.release_date).toLocaleDateString()}
                    </span>
                    <span className={styles.imdb}>{data?.vote_average} <span>IMDB</span></span>
                </div>
                <p className={styles.overview}>{data?.overview}</p>



            </div>}
        </>
    )
}

export default Info