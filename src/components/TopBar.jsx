
export const TopBar = ({ scrollToSection }) => {

    return (
        <div id="topBarSection" className="topBar">
            <div className="topBarName">
                <h1 className="topBarNameH1" >chiquicode</h1>
            </div>
            <ul className="topBarUl">
                <li className="topBarUlLi">
                    <a>Inicio</a>
                </li>
                <li className="topBarUlLi">
                    <a onClick={() => scrollToSection('secondSloganSection')}>Servicios</a>
                </li>
                <li className="topBarUlLi">
                    <a>Nosotros</a>
                </li>
                <li className="topBarUlLi">
                    <a onClick={() => scrollToSection('contactSection')}>Contacto</a>
                </li>
            </ul>
        </div>
    )
}
