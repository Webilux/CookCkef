import styles from "./Header.module.scss"
import logo from "../../assets/images/cookchef.png"
import { useState } from "react"
import HeaderMenu from "./components/HeaderMenu/HeaderMenu"
import { NavLink } from "react-router-dom"

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill d-flex align-items-center">
        <NavLink to="/">
          <img src={logo} alt="logo cookchef" />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="/admin">
          <button className="mr-15 btn btn-primary">Admin</button>
        </NavLink>
        <button className="mr-15 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Panier</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  )
}

export default Header
