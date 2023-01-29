import { FaBars, FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import '../styles/c_styles/categories.scss'

const Categories = () => {
  return (
    <ul className="categories">
      <li className="categories__item">
        <NavLink to='/'>
          <FaBars />
          <h4>Home</h4>
        </NavLink>
      </li>
      <li className="categories__item">
        <NavLink to='/cuisine/italian'>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
      </li>
      <li className="categories__item">
        <NavLink to='/cuisine/american'>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
      </li>
      <li className="categories__item">
        <NavLink to='/cuisine/thai'>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
      </li>
      <li className="categories__item">
        <NavLink to='/cuisine/japanese'>
          <GiChopsticks />
          <h4>Japanese</h4>
        </NavLink>
      </li>
    </ul>
  )
}

export default Categories
