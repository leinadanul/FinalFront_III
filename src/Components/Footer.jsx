import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import styles from "./Footer.module.css";

const Footer = () => {
  const { tema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false
  return (
    <footer>
      <div className={styles.footerWrapper}>

        <div className={`${styles.top}`}></div>
        <div className={`${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                <img className={`${darkMode ? styles.iconsDark : ''} ${styles.dhLogo}`} src="/images/DH.png" alt='logo' />
              </div>
              
              <div className={`col-sm-12 col-lg-6 ${darkMode ? styles.iconsDark : ''} ${styles.icons}`}>
                
                <img src="/images/ico-facebook.png" alt="facebook" className={styles.icon} />

                <img src="/images/ico-instagram.png" alt="instagram" className={styles.icon} />
                
                <img src="/images/ico-whatsapp.png" alt="whatsapp" className={styles.icon} />
              
                <img src="/images/ico-tiktok.png" alt="tiktok" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer >
  )



  }

export default Footer

//Listo aca