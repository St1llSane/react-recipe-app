import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import '../styles/c_styles/header.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <GiKnifeFork />
      </Link>
    </header>
  )
}

export default Header
