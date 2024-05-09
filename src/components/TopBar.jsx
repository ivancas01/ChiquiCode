import { Link } from "react-router-dom"

export const TopBar = () => {

    return (
        <div id="topBarSection" className="topBar">
            <div className="topBarName">
                <h1 className="topBarNameH1" >QUIRACODE</h1>
            </div>
            <ul className="topBarUl">
                <li className="topBarUlLi">
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li className="topBarUlLi">
                    <Link to={'/?scrollTo=secondSloganSection'}>Servicios</Link>
                </li>
                <li className="topBarUlLi">
                    <Link to={'/OurTeam'}>Nosotros</Link>
                </li>
                <li className="topBarUlLi">
                <Link to={'/?scrollTo=contactSection'}>Contacto</Link>
                </li>
            </ul>
        </div>
    )
}
