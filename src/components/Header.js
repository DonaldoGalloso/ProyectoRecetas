import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <nav id="navbar-example2" className="navbar shadow navbar-black bg-light px-5">
            <Link className="navbar-brand" to={'/'}>El BarApp</Link>
            <ul className="nav nav-pills">
                <li className="nav-item">
                <Link className="nav-link" to={'/sobrenosotros'}>Sobre Nosotros</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">Second</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Header;