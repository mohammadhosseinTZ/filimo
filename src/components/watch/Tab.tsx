import { useState } from "react"
import styles from "./styles.module.css"
import Button from "./Button"
import { TCasts, TMovies } from "../hero/Hero";
import Watch from "./Watch";
import Info from "./Info";
import Similar from "./Similar";
function Tab({ data }: { data?: TMovies | null}) {
    const [clicked, setClicked] = useState<number>(0)
    const handleClicked = (i: number) => setClicked(i);

    const tabs = ['بازیگران' ,'اطلاعات فیلم', 'فیلم های مشابه']
    const content =[ <Watch casts = { data?.casts }  /> , <Info data ={data}/> , <Similar/>]
    return (
        <div className={styles.tabs_wrapper}>
            <div className={styles.tabs}>
                {
                    tabs.map((el: string, index: number) => <Button key={index} title={el} index={index} onClicked={handleClicked} clicked={clicked} />)
                }
            </div>
            <div className={styles.content}>
                {content.map( (el:any , i:number) => <div key={i} className={`${clicked == i && styles.active}`}>{el}</div> )}
            </div>
        </div>
    )
}

export default Tab