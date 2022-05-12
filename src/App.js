import "./App.css";
import { QuienSoy } from "./pages/quiensoy";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import { Portafolio } from "./pages/portafolio";
import { Habilidades } from "./pages/habilidades";
import { Contacto } from "./pages/contacto";
import logo from "./img/logo-vector.svg";

function App() {
  return (
    <div className="App" name="header">
      <HashRouter>
        <div>
          <div className="bar-naver ">
          <img className="logo-bar" alt="logo" src={logo} />
            <div className="grid">
              <Link to="/">Inicio</Link>
              <Link to="/port">Portafolio</Link>
              <Link to="/habilidades">Habilidades</Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<QuienSoy />} exact={true} />
            <Route path="/port" element={<Portafolio />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
