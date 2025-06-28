import styles from "./styles.module.css"
function Button({title , index , onClicked , clicked} : { title : string , index:number , onClicked:(i:number)=>void , clicked:number } ) {
  return (
    <button onClick={()=>onClicked(index)} className={`${clicked == index && styles.active}`}>{title}</button>
  )
}

export default Button