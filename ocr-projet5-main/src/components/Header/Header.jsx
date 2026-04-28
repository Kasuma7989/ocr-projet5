import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
      </nav>
    </header>
  )
}

export default Header