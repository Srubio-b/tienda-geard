import './Navbar.scss'

export function Navbar () {
    return (
        <nav className="navbar">
          <div className="logo">Tienda Grupo Geard</div>
          <ul className="nav-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/contacto">Mi sitio</a>
            </li>
          </ul>
        </nav>
    );
}