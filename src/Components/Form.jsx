import { useState, useContext } from "react";
import { ContextGlobal } from './utils/global.context';
import styles from "./Form.module.css";

const Form = () => {
  const [state, setState] = useState({
    User: "",
    password: "",
  });

  const { tema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false

  const handLeInputChange = (event) => {
    setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO User in the API
  };

  return (
    <div className={`text-center card container ${styles.card} ${darkMode ? styles.cardDark : ''}`}>
      <div className={`card-body ${styles.CardBody}`}>
        <form onSubmit={handleSubmit}>
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="User"
            value={state.User}
            name="User"
            onChange={handLeInputChange}
            required
          />
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Password"
            value={state.password}
            name="email"
            onChange={handLeInputChange}
            required
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

//Hasta aca sin singun problema ojo terminar contraseña