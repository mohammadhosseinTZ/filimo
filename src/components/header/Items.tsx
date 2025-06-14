import { Link } from "react-router"
import pic from "../../utils/images/fa-filimo-dark-logo.svg"
import styles from "./styles.module.css"

function Items() {
    return (
        <ul className={styles.items_wrapper}>
            <li className={styles.img_wrapper}><Link to={"/"}><img src={pic} alt="main_img" /></Link></li>
            <li><Link to={"/"}>تماشای آنلاین </Link></li>
            <li><Link to={"/"}>فیلم</Link></li>
            <li><Link to={"/"}>سریال</Link></li>
            <li><Link to={"/"}>ایرانی</Link></li>
            <li><Link to={"/"}>خارجی</Link></li>
            <li><Link to={"/"}>مجموعه ها</Link></li>
            <li><Link to={"/"}>فیلیمو مدرسه <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><g fill-rule="evenodd" clip-rule="evenodd"><path d="m6.4 12.9.8-.4a31 31 0 0 0 4.4-2.7l.1-.2a3.5 3.5 0 0 0 0-1.7l-.8-1.6v.2c0 .2-.1.3-.3.4l-.2.3c-.2 0-.3.2-.5.3a34 34 0 0 1-4.7 2.7c.1.1.7.5 1 1.2.4.7.3 1.3.2 1.5M4 11.4l-1.1 1.3.1.3h1.7c0-.1.2-1-.7-1.6"></path><path d="M12 8.7h-.1v-.5a4 4 0 0 0-.9-1.8l-.6-.6a37.6 37.6 0 0 0-6.7-3.5l-.2.1C3.6 1.7 4 1 4.7.6c.3-.3.6-.5 1-.6h.4l.4.2 1 .4a33 33 0 0 1 4 2.5l.2.3V4a22 22 0 0 1 .2 3.9v.7Z"></path><path d="M2.9 9.2 3 9a131 131 0 0 1 0-5.8l.1-.4c0-.4.2-.7.4-1 .3-.6.7-1.1 1.3-1.5h-.2A33 33 0 0 0 .4 3.2l-.2.3v.3l-.1.7-.1 1v3.6c0 .1.2.2.3 0l1.2-1.3c0-.1.1-.1.2 0z"></path></g></svg></Link></li>
            <li><Link to={"/"}>کودک <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.413 5.266a.47.47 0 0 1 .31.51l-.927 6.462q1.052.412 2.084.662c0-2.332 1.796-3.841 3.74-3.841 1 0 1.941.387 2.65 1.092a3.7 3.7 0 0 1 1.09 2.407q1-.332 2.015-.815l-.783-5.392a.514.514 0 0 0-.508-.435H8.522a.47.47 0 0 1-.469-.476C8.108 1.843 7.027.764 5.646.152a.234.234 0 0 0-.328.228l.052.89a.64.64 0 0 1-.265.574c-.077.056.119-.022-3.104 1.124-.549.195-.775.84-.474 1.31.35.538.8.614 1.886.988"></path><path d="M0 12.42v1.537a.28.28 0 0 0 .161.253c4.719 2.21 10.95 2.21 15.678 0a.28.28 0 0 0 .161-.253v-1.529a.278.278 0 0 0-.408-.246c-5.03 2.649-9.829 2.784-15.185-.008A.278.278 0 0 0 0 12.42"></path></svg></Link></li>
            <li><Link to={"/"}>جستجو<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.16 4.84a8 8 0 0 0-12 10.56l-4.4 4.39a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.42-4.39a8 8 0 0 0 10.56-12Zm-1.42 9.9a6 6 0 1 1 0-8.48 6 6 0 0 1 0 8.48"></path></svg></Link></li>
        </ul>
    )
}

export default Items