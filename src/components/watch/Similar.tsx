import styles from "./styles.module.css"
import { useSimilar } from '../../hooks/useSemilar'
import { useState } from "react"
import gif from "../../utils/images/1488.gif"
import { TMovies } from "../hero/Hero"
import { useNavigate } from "react-router"

function Similar() {
  const [num, setNum] = useState<number>(6)
  const { data, isFetching } = useSimilar(num)
  const navigate = useNavigate()
  const handleClicked =((el:TMovies)=>{
    localStorage.setItem("item" , JSON.stringify(el))
    navigate(`/w/${el.original_title}`)
})

  return (
    <div className={styles.similar_movies}>
      <div className={styles.header}>
        <p className={styles.label}>انتخاب کنید، چند فیلم مشابه میخواهید بارگزاری شود ؟</p>
        <div className={styles.btn_choose}>
          <button className={`${num == 6 && styles.active}`} onClick={() => setNum(6)}>6</button>
          <button className={`${num == 10 && styles.active}`} onClick={() => setNum(10)}>10</button>
          <button className={`${num == 16 && styles.active}`} onClick={() => setNum(16)}>16</button>
          <button className={`${num == 30 && styles.active}`} onClick={() => setNum(30)}>30</button>
        </div>
      </div>
      {isFetching 
       ?<div className={styles.gif}><img src={gif} width={20} alt="" /></div> 
      :data&& <div className={styles.similar_items}>{data.map((el:TMovies , i:number) => <button onClick={()=>handleClicked(el)}  className={styles.similar_item}><img src={el.poster_path} alt="" /><p>{el.original_title}</p></button>)}</div>
    }
    </div>
  )
}

export default Similar