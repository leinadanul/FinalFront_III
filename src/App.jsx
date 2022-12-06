
import { useEffect, useContext } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from './Components/utils/global.context';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { tema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
