import { useEffect, useRef } from "react"
import { useMoviesInfinite } from "../../hooks/useMoviesInfinite"
import { TMovies } from "../hero/Hero"
import Item from "./skelton/Item"
import styles from "./styles.module.css"
import gif from "../../utils/images/1488.gif"
import { Link } from "react-router"

function AllMovies() {
    const { data, isPending, isFetchingNextPage, to, total, hasNextPage, fetchNextPage } = useMoviesInfinite()
    const tagObserver = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage()
                }
            },
            {
                threshold: 1
            }
        )

        const current = tagObserver.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [hasNextPage, fetchNextPage, isFetchingNextPage])

    return (
        <div className="container">
            {isPending ?
                <div className={styles.skelton_wrapper}>{[...Array(20)].map((_, index) => <Item key={index} />)}</div>
                :
                <div className={styles.movies_wrapper}>
                    {data && data?.map((el: TMovies) => <Link to={`/w/${el.id}`} key={el.id} className={styles.item}><img loading="lazy" src={el.poster_path} alt={el.original_title} /> <p>{el.original_title}</p> </Link>)}
                </div>
            }
            <div ref={tagObserver}></div>
            {isFetchingNextPage &&

                <div className={styles.result_info_wrapper}>
                    <img className={styles.gif} src={gif} />
                    <div className={styles.result_info}>
                        <span>{to}</span>
                        <span>از</span>
                        <span>{total}</span>
                        <span>مورد</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default AllMovies