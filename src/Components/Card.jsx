import { useContext } from 'react'
import { Link } from "react-router-dom";
import { setFavorite, isFav, removeFavorite } from "./utils/localStorage.service";
import { ContextGlobal } from './utils/global.context';
import styles from "./Card.module.css";

const Card = ({ name, username, id }) => {
  const { tema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false

  const addFav = () => {
    setFavorite({ name, username, id });
  }

  const deleteFav = () => {
    removeFavorite(id);
  }

  const fav = isFav(id);

  return (
    <div className={`card ${darkMode ? styles.cardDark : ''}`}>
      <img className="card-img-top" src="/images/doctor.jpg" alt="imgDoctor" />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/medico/${id}`}>
          <h6 className={`card-title ${styles.title}`}>{name}</h6>
        </Link>
        <p className="card-text">{username}</p>
        <button onClick={fav ? deleteFav : addFav} className={`btn btn-${darkMode ? 'dark' : 'light'} ${styles.favButton}`}>{fav ? '❌' : '⭐'}</button>
      </div>
    </div>
  );
};

export default Card;

//CARD LISTA , MODIFICAR COLOR