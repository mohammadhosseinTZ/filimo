import styles from "../styles.module.css"

export default function Hero_Skelton() {
    return (
        <div className={`${styles.skelton_hero}  skeleton-wrapper `}>
            <div className={`${styles.skeleton_image} skeleton-image`}></div>
        </div>
    )
}
