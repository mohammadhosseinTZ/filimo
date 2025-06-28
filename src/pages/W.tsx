import { useEffect, useMemo, useState } from "react"
import { TMovies } from "../components/hero/Hero";
import { useNavigate } from "react-router";
import styles from "./styles.module.css"
import Tab from "../components/watch/Tab";

function W() {
    const navigate = useNavigate()
    const [data, setData] = useState<Readonly<TMovies> | null>(null);

    useEffect(() => {
        const ls_data = localStorage.getItem("item");

        if (ls_data) {
            const parsed = JSON.parse(ls_data);
            setData(parsed);

        } else navigate("/")
    }, []);

    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_wrapper}>
                {data && <div className={styles.hero} style={{ backgroundImage: `url(${data.poster_path})` }}>
                    <h1 className={styles.title}>
                         {data.original_title} 
                    </h1>
                </div>}
            </div>

            <div className="container">
                <Tab data = { data } />
            </div>

        </div>
    )
}

export default W