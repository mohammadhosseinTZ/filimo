import styles from "../styles.module.css"
function Item() {
    return (
        <div className={`skeleton-wrapper ${styles.skelton_items}`}>
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
        </div>
    )
}

export default Item