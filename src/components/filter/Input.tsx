import { useState } from "react"
import styles from "./styles.module.css"

function Input({ title, readOnly, placeHolder, min, max }: { title: string, readOnly: boolean, placeHolder?: string, min?: number, max?: number }) {
    const [input, setInput] = useState<string | number>('')
    return (
        <div className={`${styles.form_input} ${placeHolder && styles.form_search}`}>
            <label htmlFor="">{title}</label>
            <input type="text" value={input} readOnly={readOnly} placeholder={placeHolder} onChange={(e => setInput(e.target.value))}/>


            {
                readOnly &&

                <input type="range" min={min} max={max} onChange={(e => setInput(e.target.value))} className={styles.range}/>

            }
        </div>
    )
}

export default Input