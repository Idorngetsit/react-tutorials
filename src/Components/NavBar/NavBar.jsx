import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav'>
      
        <div style={{
          color: 'white'
        }}><Link to='/'>Logo</Link></div>


        <ul className = 'nav-ul'>
          
          <li><Link to='contact'>Contact</Link></li>
          <li><Link to='about'>About</Link></li>

        </ul>
        </nav>
  )
}

export default NavBar