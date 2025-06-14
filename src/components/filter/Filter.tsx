import Input from "./Input"
import styles from "./styles.module.css"

function Filter() {
    return (
        <form className={`${styles.filters} container`}>
            <Input title="تاریخ انتشار" readOnly={true} min={2000} max={2025}/>
            <Input title="امتیاز" readOnly={true} min={1} max={10}/>
            <Input title="" readOnly={false} placeHolder={"جستجو"}/>
            <button>فیلتر</button>
        </form>
    )
}

export default Filter