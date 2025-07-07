import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <Link to="/mision1">Mision 1</Link>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
        <li>
          <Link to="/integrantes">Integrantes</Link>
        </li>
        <Link to="/modeloer">Modelos</Link>
        <Link to="/basededatos">Base de Datos</Link>
      </ul>
    </nav>
  );
}
