import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { tema, setDarktema, setLighttema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false

  const changetema = () => {

    if (darkMode) setLighttema()

    else setDarktema()
  }

  return (
    <header className="sticky-top">
      <nav className={`navbar navbar-expand-sm ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`} aria-label="Third navbar example">
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">DH Odonto</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className='nav-link' to="/home">Home</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className='nav-link' to="/favs">Favorite</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className='nav-link' to="/Contact">Contact</Link>
              </li>
              <li className={`nav-item`}>
                <button className={`btn btn-${darkMode ? 'light' : 'dark'} ${styles.btnStyle}`} onClick={changetema} >{darkMode ? "☀️" : "🌙"} </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

//LISTA LA NAVBAR