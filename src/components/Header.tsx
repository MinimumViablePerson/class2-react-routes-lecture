import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/store'>Store</Link>
          </li>
          <li>
            <Link to='/basket'>Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
