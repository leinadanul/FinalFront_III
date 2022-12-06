import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import styles from './DetailCard.module.css';

const DetailCard = () => {
  const { id } = useParams();
  const [medico, setmedico] = useState(undefined);
  const { tema } = useContext(ContextGlobal);
  const darkMode = tema === "dark" || false;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setmedico((data))
      })
  }, [id])
  return (
    <>
      <h1>Sobre el Doctor {medico?.name} </h1>
      {
        medico ?
          <section className="card col-sm-12 col-lg-6 container">
            <div className={`card-body row ${darkMode ? styles.cardDark : ''}`}>
              <div className="col-sm-12 col-lg-6">
                <img className="card-img-top" src="/images/doctor.jpg" alt="imagenCard" />
              </div>
              <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                  <li className="list-group-item">Nombre: {medico.name}</li>

                  <li className="list-group-item">Telefono: {medico.phone}</li>

                  <li className="list-group-item">Website: {medico.website}</li>

                  <li className="list-group-item">Email: {medico.email}</li>

                </ul>
                <div className="text-center">
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" className={`btn btn-${darkMode ? 'dark' : 'light'} ${styles.button}`}>
                    Agenda una consulta</button>
                </div>
              </div>
            </div>
          </section>
          : null
      }
    </>
  )
}

export default DetailCard;

//Listo hasta aca