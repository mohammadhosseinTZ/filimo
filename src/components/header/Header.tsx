import styles from "./styles.module.css"
import Items from './Items'
import Buttons from './Buttons'

function Header() {
  return (
    <nav className={`${styles.nav_wrapper} container`}>
        <Items/>
        <Buttons/>
    </nav>
  )
}

export default Header