import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="">
        <h1>Tennis App</h1>
      </Link>
      <nav>
        <NavLink to="players">Players</NavLink>
        <NavLink to="racquets">Racquets</NavLink>
        <NavLink to="racquets">Strings</NavLink>
        <NavLink to="racquets">History</NavLink>
      </nav>
    </header>
  );
}
