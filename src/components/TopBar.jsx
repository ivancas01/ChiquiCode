import { Link } from 'react-router-dom'

export const TopBar = () => {
  return (
    <div className="topBar">
        <div className="topBarName">
            <h1 className="topBarNameH1" >chiquicode</h1>
        </div>
        <ul className="topBarUl">
            <li className="topBarUlLi">
                <Link to={"/"}>Inicio</Link>
            </li>
            <li className="topBarUlLi">
                <Link to={"/collections"}>Servicios</Link>
            </li>
            <li className="topBarUlLi">
                <Link to={"/Products"}>Nosotros</Link>
            </li>
            <li className="topBarUlLi">
                <Link to={"/Products"}>Contacto</Link>
            </li>
        </ul>
    </div>
  )
}
