import React, { useContext } from "react"
import Input from "./Input"
import styles from "./styles.module.css"
import { InfiniteContext } from "../../context/InfiniteProvider"

function Filter() {
    const context = useContext(InfiniteContext)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const form_data = new FormData(e.currentTarget)
        const year = form_data.get("year") as string | '';
        const rating = form_data.get("rating") as string | '';
        const search = form_data.get("search") as string | '';
        const ob = {
            year:year ,
            rating : rating ,
            search
        }
        context.dispatch({type:"FILTER" , payload:ob})
        
    }
    return (
        <form className={`${styles.filters} container`} onSubmit={handleSubmit} >
            <Input title="تاریخ انتشار" readOnly={true} min={2000} max={2025} name="year" />
            <Input title="امتیاز" readOnly={true} min={1} max={10}  name="rating"/>
            <Input title="" readOnly={false} placeHolder={"جستجو"} name="search" />
            <button type="submit">فیلتر</button>
        </form>
    )
}

export default Filter