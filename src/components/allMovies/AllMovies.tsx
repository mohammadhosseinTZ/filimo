import { useContext, useEffect, useRef } from "react"
import { useMoviesInfinite } from "../../hooks/useMoviesInfinite"
import { TMovies } from "../hero/Hero"
import Item from "./skelton/Item"
import styles from "./styles.module.css"
import gif from "../../utils/images/1488.gif"
import {  useNavigate } from "react-router"
import { InfiniteContext } from "../../context/InfiniteProvider"

function AllMovies() {
    const { data, isPending, isFetchingNextPage, to, total, hasNextPage, fetchNextPage } = useMoviesInfinite()
    const tagObserver = useRef(null)
    const navigate = useNavigate()
    const context = useContext(InfiniteContext)

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    context.state.filterData.length == 0 && fetchNextPage()
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
    const handleClicked =((el:TMovies)=>{
        localStorage.setItem("item" , JSON.stringify(el))
        navigate(`/w/${el.original_title}`)
    })
    return (
        <div className="container">
            {isPending ?
                <div className={styles.skelton_wrapper}>{[...Array(20)].map((_, index) => <Item key={index} />)}</div>
                :
                <div className={styles.movies_wrapper}>
                    {
                        context.state.filterData.length > 0 
                        ?
                        context.state.filterData?.map((el: TMovies) => <button onClick={()=>handleClicked(el)} key={el.id} className={styles.item}><img loading="lazy" src={el.poster_path} alt={el.original_title} /> <p>{el.original_title}</p> </button>)
                        :
                        context.state.allData?.map((el: TMovies) => <button onClick={()=>handleClicked(el)} key={el.id} className={styles.item}><img loading="lazy" src={el.poster_path} alt={el.original_title} /> <p>{el.original_title}</p> </button>)
                    }

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