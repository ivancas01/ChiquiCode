import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const TopBar = ({ scrollToSection = null }) => {
  const navigate = useNavigate()
  const handleMenuClick = (sectionId) => {
    if (scrollToSection) {
      scrollToSection(sectionId)
    }
  }
  return (
    <div id="topBarSection" className="topBar">
      <div className="topBarName">
        <h1 className="topBarNameH1" onClick={() => navigate('/')}>
          CODELAND SOLUTIONS
        </h1>
      </div>
      <ul className="topBarUl">
        <li className="topBarUlLi">
          <Link to={'/'} onClick={() => handleMenuClick('')}>
            Inicio
          </Link>
        </li>
        <li className="topBarUlLi">
          <Link to={'/'} onClick={() => handleMenuClick('secondSloganSection')}>
            Servicios
          </Link>
        </li>
        <li className="topBarUlLi">
          <Link to={'/OurTeam'}>Nosotros</Link>
        </li>
        <li className="topBarUlLi">
          <Link to={'/'} onClick={() => handleMenuClick('contactSection')}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  )
}
